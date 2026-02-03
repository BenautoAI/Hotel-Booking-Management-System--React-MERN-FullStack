import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Upload, Check } from "lucide-react";

// Pre-loaded avatar options
const AVATAR_GALLERY = [
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Max",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Bella",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Cooper",
  "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
];

type AvatarEditorProps = {
  isOpen: boolean;
  onClose: () => void;
  currentAvatarUrl?: string;
  onSave: (avatarUrl: string) => void;
};

const AvatarEditor = ({
  isOpen,
  onClose,
  currentAvatarUrl,
  onSave,
}: AvatarEditorProps) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    currentAvatarUrl || ""
  );
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        setSelectedAvatar(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGallerySelect = (url: string) => {
    setSelectedAvatar(url);
    setPreviewUrl("");
  };

  const handleSave = () => {
    if (selectedAvatar) {
      onSave(selectedAvatar);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Edit Avatar
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Upload your own image or choose from our gallery
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Upload Section */}
          <div className="space-y-3">
            <Label className="text-base font-semibold text-gray-900">
              Upload Your Image
            </Label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="cursor-pointer"
                />
              </div>
              {previewUrl && (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                  />
                  <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500">
              Supported formats: JPG, PNG, GIF. Max size: 5MB
            </p>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or choose from gallery
              </span>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="space-y-3">
            <Label className="text-base font-semibold text-gray-900">
              Avatar Gallery
            </Label>
            <div className="grid grid-cols-5 gap-3">
              {AVATAR_GALLERY.map((url, index) => (
                <button
                  key={index}
                  onClick={() => handleGallerySelect(url)}
                  className={`relative group aspect-square rounded-full overflow-hidden border-2 transition-all duration-200 hover:scale-110 hover:shadow-lg ${
                    selectedAvatar === url
                      ? "border-primary-600 ring-4 ring-primary-200"
                      : "border-gray-200 hover:border-primary-400"
                  }`}
                >
                  <img
                    src={url}
                    alt={`Avatar ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedAvatar === url && (
                    <div className="absolute inset-0 bg-primary-600/20 flex items-center justify-center">
                      <div className="bg-primary-600 rounded-full p-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Preview Section */}
          {selectedAvatar && (
            <div className="space-y-3 pt-4 border-t">
              <Label className="text-base font-semibold text-gray-900">
                Preview
              </Label>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={selectedAvatar}
                  alt="Selected avatar"
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Selected Avatar
                  </p>
                  <p className="text-xs text-gray-500">
                    This will be your new profile picture
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!selectedAvatar}
            className="bg-primary-600 hover:bg-primary-700"
          >
            <Upload className="w-4 h-4 mr-2" />
            Save Avatar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarEditor;
