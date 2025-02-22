import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProfileImage = ({ src }: { src?: string }) => {
  return (
    <AspectRatio
      ratio={3 / 4}
      className="mb-4 relative group overflow-hidden hover:shadow-lg rounded-lg"
    >
      {src ? (
        <img
          src={src}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className="opacity-25 w-full h-full flex justify-center items-center bg-orange-900">
          Image not found
        </div>
      )}
    </AspectRatio>
  );
};

export default ProfileImage;
