import React, { useState } from "react";
import { User, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  editable?: boolean;
  onAvatarChange?: (avatarUrl: string) => void;
  className?: string;
};

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

// Pre-loaded gallery avatars
const GALLERY_AVATARS = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
];

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  size = "md",
  editable = false,
  onAvatarChange,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(src || "");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (avatarUrl: string) => {
    setSelectedAvatar(avatarUrl);
    setUploadedFile(null);
  };

  const handleSave = () => {
    if (onAvatarChange && selectedAvatar) {
      onAvatarChange(selectedAvatar);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedAvatar(src || "");
    setUploadedFile(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "relative rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center",
          sizeClasses[size],
          editable && "cursor-pointer",
          className
        )}
        onMouseEnter={() => editable && setIsHovered(true)}
        onMouseLeave={() => editable && setIsHovered(false)}
        onClick={() => editable && setIsModalOpen(true)}
      >
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <User className={cn("text-white", iconSizes[size])} />
        )}

        {/* Hover overlay for editable avatars */}
        {editable && isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-200">
            <Upload className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      {/* Avatar Editor Modal */}
      {editable && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Avatar</DialogTitle>
              <DialogDescription>
                Upload your own image or choose from the gallery below.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Preview Section */}
              <div className="flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  {selectedAvatar ? (
                    <img
                      src={selectedAvatar}
                      alt="Avatar preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-white" />
                  )}
                </div>
              </div>

              {/* Upload Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <div className="flex gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="flex-1 cursor-pointer"
                  >
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        document.getElementById("avatar-upload")?.click()
                      }
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {uploadedFile ? uploadedFile.name : "Choose File"}
                    </Button>
                  </label>
                </div>
              </div>

              {/* Gallery Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Or Choose from Gallery
                </label>
                <div className="grid grid-cols-5 gap-3">
                  {GALLERY_AVATARS.map((avatarUrl, index) => (
                    <button
                      key={index}
                      onClick={() => handleGallerySelect(avatarUrl)}
                      className={cn(
                        "w-full aspect-square rounded-full overflow-hidden border-2 transition-all hover:scale-110",
                        selectedAvatar === avatarUrl
                          ? "border-primary-600 ring-2 ring-primary-300"
                          : "border-gray-200 hover:border-primary-400"
                      )}
                    >
                      <img
                        src={avatarUrl}
                        alt={`Avatar option ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-end pt-4">
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Avatar;
