import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Edit2 } from "lucide-react";
import AvatarEditor from "./AvatarEditor";
import useAppContext from "../hooks/useAppContext";

const UserAvatar = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  // Fetch current user data
  const { data: currentUser, isLoading } = useQuery(
    "currentUser",
    apiClient.fetchCurrentUser,
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  // Mutation to update avatar
  const updateAvatarMutation = useMutation(
    (avatarUrl: string) => apiClient.updateUserAvatar(avatarUrl),
    {
      onSuccess: (data) => {
        // Update the cached user data
        queryClient.setQueryData("currentUser", (old: any) => ({
          ...old,
          avatarUrl: data.avatarUrl,
        }));
        showToast({
          title: "Success!",
          description: "Your avatar has been updated.",
          type: "SUCCESS",
        });
      },
      onError: () => {
        showToast({
          title: "Error",
          description: "Failed to update avatar. Please try again.",
          type: "ERROR",
        });
      },
    }
  );

  const handleSaveAvatar = (avatarUrl: string) => {
    updateAvatarMutation.mutate(avatarUrl);
  };

  const handleSignOut = async () => {
    try {
      await apiClient.signOut();
      queryClient.invalidateQueries();
      window.location.href = "/";
    } catch (error) {
      showToast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        type: "ERROR",
      });
    }
  };

  if (isLoading || !currentUser) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse" />
    );
  }

  // Get user initials for fallback
  const initials = `${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(0)}`.toUpperCase();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="relative group focus:outline-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Avatar className="w-10 h-10 cursor-pointer ring-2 ring-white/50 hover:ring-white transition-all duration-200 hover:scale-110">
              <AvatarImage
                src={currentUser.avatarUrl}
                alt={`${currentUser.firstName} ${currentUser.lastName}`}
              />
              <AvatarFallback className="bg-primary-500 text-white font-semibold text-sm">
                {initials}
              </AvatarFallback>
            </Avatar>
            
            {/* Edit icon overlay on hover */}
            {isHovered && (
              <div 
                className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditorOpen(true);
                }}
              >
                <Edit2 className="w-4 h-4 text-white" />
              </div>
            )}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-64 bg-white shadow-lg border border-gray-200"
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex items-center gap-3 py-2">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={currentUser.avatarUrl}
                  alt={`${currentUser.firstName} ${currentUser.lastName}`}
                />
                <AvatarFallback className="bg-primary-500 text-white font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold text-gray-900 leading-none">
                  {currentUser.firstName} {currentUser.lastName}
                </p>
                <p className="text-xs text-gray-500 leading-none">
                  {currentUser.email}
                </p>
                {currentUser.role && (
                  <p className="text-xs text-primary-600 leading-none capitalize">
                    {currentUser.role}
                  </p>
                )}
              </div>
            </div>
          </DropdownMenuLabel>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => setIsEditorOpen(true)}
          >
            <Edit2 className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm text-gray-700">Edit Avatar</span>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem
            className="cursor-pointer hover:bg-red-50 focus:bg-red-50"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4 mr-2 text-red-600" />
            <span className="text-sm text-red-600 font-medium">Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Avatar Editor Modal */}
      <AvatarEditor
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        currentAvatarUrl={currentUser.avatarUrl}
        onSave={handleSaveAvatar}
      />
    </>
  );
};

export default UserAvatar;
