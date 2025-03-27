import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface WorkshopCardProps {
  id: string;
  title: string;
  image: string;
  instructor: string;
  date: string;
  time: string;
  location: string;
  price: number;
  attendees: number;
  maxAttendees: number;
  description: string;
  category: string;
}

const WorkshopCard = ({
  id,
  title,
  image,
  instructor,
  date,
  time,
  location,
  price,
  attendees,
  maxAttendees,
  description,
  category,
}: WorkshopCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          ${price}
        </div>
        <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
          {category}
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Instructor: {instructor}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-2" /> {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={16} className="mr-2" /> {time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-2" /> {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users size={16} className="mr-2" /> {attendees}/{maxAttendees}{" "}
            spots filled
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {description}
        </p>

        <Button className="w-full">Register Now</Button>
      </CardContent>
    </Card>
  );
};

export default WorkshopCard;
