import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Star } from "lucide-react";

interface TutorCardProps {
  id: string;
  name: string;
  photo: string;
  title: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  expertise: string[];
  bio: string;
}

const TutorCard = ({
  id,
  name,
  photo,
  title,
  rating,
  reviews,
  hourlyRate,
  location,
  expertise,
  bio,
}: TutorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start mb-4">
            <img
              src={photo}
              alt={name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-muted-foreground text-sm">{title}</p>
              <div className="flex items-center mt-1">
                <Star
                  size={16}
                  className="text-amber-500 fill-amber-500 mr-1"
                />
                <span className="text-sm font-medium">{rating}</span>
                <span className="text-sm text-muted-foreground ml-1">
                  ({reviews} reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin size={16} className="mr-2" /> {location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock size={16} className="mr-2" /> ${hourlyRate}/hour
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-secondary px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
