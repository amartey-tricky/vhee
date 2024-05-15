import CldImage from "@/components/cldimage";
import { v2 } from "cloudinary";

v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface imageProps {
  public_id: string;
  secure_url: string;
}

export default async function Page() {
  const { resources } = await v2.search.expression("folder:ankaful").execute();

  return (
    <main className="container mx-auto py-8 px-12 md:px-24">
      <h1 className="text-3xl font-bold mb-8">We Dey 4 You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resources.map((resource: imageProps) => {
          return (
            <div key={resource.public_id} className="relative">
              <CldImage
                width="500"
                height="350"
                src={resource.secure_url}
                alt={`Gallery Image ${resource.public_id}`}
                className="rounded-lg shadow-md"
                aspectRatio="16:9"
                priority={false}
                crop="fill"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
