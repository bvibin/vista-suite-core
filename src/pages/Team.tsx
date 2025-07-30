import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    department: "Engineering",
    email: "john.doe@acme.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg",
    initials: "JD",
    joinDate: "2022-03-15",
    status: "Active",
    skills: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Product Manager",
    department: "Product",
    email: "sarah.wilson@acme.com",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    avatar: "/placeholder.svg",
    initials: "SW",
    joinDate: "2021-11-20",
    status: "Active",
    skills: ["Product Strategy", "Analytics", "User Research"]
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Backend Developer",
    department: "Engineering",
    email: "mike.johnson@acme.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    avatar: "/placeholder.svg",
    initials: "MJ",
    joinDate: "2020-08-10",
    status: "Active",
    skills: ["Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "UX Designer",
    department: "Design",
    email: "emily.chen@acme.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    avatar: "/placeholder.svg",
    initials: "EC",
    joinDate: "2023-01-08",
    status: "Active",
    skills: ["Figma", "User Research", "Prototyping"]
  },
  {
    id: 5,
    name: "Alex Brown",
    role: "DevOps Engineer",
    department: "Engineering",
    email: "alex.brown@acme.com",
    phone: "+1 (555) 567-8901",
    location: "Denver, CO",
    avatar: "/placeholder.svg",
    initials: "AB",
    joinDate: "2022-09-12",
    status: "On Leave",
    skills: ["Docker", "Kubernetes", "CI/CD"]
  },
  {
    id: 6,
    name: "Lisa Garcia",
    role: "Marketing Manager",
    department: "Marketing",
    email: "lisa.garcia@acme.com",
    phone: "+1 (555) 678-9012",
    location: "Los Angeles, CA",
    avatar: "/placeholder.svg",
    initials: "LG",
    joinDate: "2021-05-18",
    status: "Active",
    skills: ["Content Strategy", "SEO", "Social Media"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300";
    case "On Leave": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Inactive": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

const getDepartmentColor = (department: string) => {
  switch (department) {
    case "Engineering": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Product": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
    case "Design": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
    case "Marketing": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function Team() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Team</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Add Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback className="text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-card-foreground truncate">
                      {member.name}
                    </h3>
                    <Badge className={getStatusColor(member.status)}>
                      {member.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-2">
                    {member.role}
                  </p>
                  
                  <Badge className={getDepartmentColor(member.department)} variant="secondary">
                    {member.department}
                  </Badge>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{member.email}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{member.phone}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{member.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium text-muted-foreground mb-2">SKILLS</p>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}