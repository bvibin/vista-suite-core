import { MoreHorizontal, Calendar, User, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    status: "In Progress",
    owner: { name: "John Doe", avatar: "/placeholder.svg", initials: "JD" },
    dueDate: "2024-02-15",
    description: "Complete overhaul of company website with modern design",
    progress: 65,
    priority: "High"
  },
  {
    id: 2,
    name: "Mobile App Development",
    status: "Planning",
    owner: { name: "Sarah Wilson", avatar: "/placeholder.svg", initials: "SW" },
    dueDate: "2024-03-20",
    description: "Native mobile app for iOS and Android platforms",
    progress: 25,
    priority: "Medium"
  },
  {
    id: 3,
    name: "Database Migration",
    status: "Completed",
    owner: { name: "Mike Johnson", avatar: "/placeholder.svg", initials: "MJ" },
    dueDate: "2024-01-30",
    description: "Migrate legacy database to new cloud infrastructure",
    progress: 100,
    priority: "High"
  },
  {
    id: 4,
    name: "API Integration",
    status: "In Progress", 
    owner: { name: "Emily Chen", avatar: "/placeholder.svg", initials: "EC" },
    dueDate: "2024-02-28",
    description: "Integrate third-party payment and shipping APIs",
    progress: 40,
    priority: "Medium"
  },
  {
    id: 5,
    name: "User Testing",
    status: "On Hold",
    owner: { name: "Alex Brown", avatar: "/placeholder.svg", initials: "AB" },
    dueDate: "2024-03-10",
    description: "Conduct comprehensive user testing for new features",
    progress: 10,
    priority: "Low"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300";
    case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Planning": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "On Hold": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "text-red-600 dark:text-red-400";
    case "Medium": return "text-yellow-600 dark:text-yellow-400";
    case "Low": return "text-green-600 dark:text-green-400";
    default: return "text-gray-600 dark:text-gray-400";
  }
};

export default function Projects() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Projects</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          New Project
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {project.name}
                    </h3>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                    <span className={`text-sm font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority} Priority
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={project.owner.avatar} />
                        <AvatarFallback className="text-xs">
                          {project.owner.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span>{project.owner.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{project.progress}% Complete</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>Assign Members</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete Project
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}