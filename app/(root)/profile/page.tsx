"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  BookOpen,
  User,
  Mail,
  Calendar,
  Edit,
  Save,
  X,
  Camera,
  LogOut,
  ChevronDown,
  BookMarked,
  Clock,
  CheckCircle,
  Star,
  Trophy,
  Target,
  TrendingUp,
  Settings,
  Shield,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

// User profile interface
interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  joinDate: string;
  location: string;
  favoriteGenres: string[];
  readingGoal: number;
  booksRead: number;
  totalPages: number;
  averageRating: number;
  currentStreak: number;
  longestStreak: number;
}

// Reading stats interface
interface ReadingStats {
  totalBooks: number;
  currentlyReading: number;
  wantToRead: number;
  completed: number;
  averageRating: number;
  totalPages: number;
  thisMonth: number;
  thisYear: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    id: "1",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Passionate reader who loves exploring different genres. Currently obsessed with sci-fi and fantasy novels.",
    joinDate: "2023-01-15",
    location: "San Francisco, CA",
    favoriteGenres: ["Science Fiction", "Fantasy", "Mystery", "Biography"],
    readingGoal: 50,
    booksRead: 32,
    totalPages: 8450,
    averageRating: 4.2,
    currentStreak: 15,
    longestStreak: 28,
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  const [stats, setStats] = useState<ReadingStats>({
    totalBooks: 32,
    currentlyReading: 3,
    wantToRead: 15,
    completed: 29,
    averageRating: 4.2,
    totalPages: 8450,
    thisMonth: 4,
    thisYear: 32,
  });

  // Notification settings
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    readingReminders: true,
    bookRecommendations: false,
    communityActivity: true,
  });

  // Handle profile edit
  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  // Handle logout
  const handleLogout = () => {
    toast.success("Logged out successfully!");
    router.push("/sign-in");
  };

  // Calculate reading progress
  const readingProgress = (profile.booksRead / profile.readingGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm animate-in slide-in-from-top duration-300">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="flex items-center group cursor-pointer"
              onClick={() => router.push("/")}
            >
              <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                BookVerse
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => router.push("/")}
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => router.push("/books")}
              className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-105 relative group"
            >
              My Books
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button className="text-sm font-medium text-orange-600 relative group">
              Profile
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300"></span>
            </button>
          </nav>

          {/* User menu */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 hover:bg-orange-50 hover:text-orange-600"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-orange-200">
                    <Image
                      src={profile.avatar || "/placeholder.svg"}
                      alt={profile.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="hidden md:inline font-medium">
                    {profile.name}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2"
                  onClick={() => router.push("/books")}
                >
                  <BookMarked className="h-4 w-4" />
                  <span>My Books</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2 text-red-600"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="border-orange-100 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Avatar */}
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-200 shadow-lg">
                    <Image
                      src={profile.avatar || "/placeholder.svg"}
                      alt={profile.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {isEditing && (
                    <button className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="h-6 w-6 text-white" />
                    </button>
                  )}
                </div>

                {/* Profile Info */}
                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={editedProfile.name}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              name: e.target.value,
                            })
                          }
                          className="border-orange-200 focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={editedProfile.bio}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              bio: e.target.value,
                            })
                          }
                          className="border-orange-200 focus:border-orange-400"
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={editedProfile.location}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              location: e.target.value,
                            })
                          }
                          className="border-orange-200 focus:border-orange-400"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {profile.name}
                      </h1>
                      <p className="text-gray-600 mb-4">{profile.bio}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <span>{profile.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Joined{" "}
                            {new Date(profile.joinDate).toLocaleDateString()}
                          </span>
                        </div>
                        {profile.location && (
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{profile.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <Button
                        onClick={handleSave}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        className="border-orange-200"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={handleEdit}
                      variant="outline"
                      className="border-orange-200 text-orange-600 hover:bg-orange-50"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-orange-100">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Statistics
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
            >
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Reading Goal Progress */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-500" />
                  Reading Goal Progress
                </CardTitle>
                <CardDescription>
                  You've read {profile.booksRead} out of {profile.readingGoal}{" "}
                  books this year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress
                    value={readingProgress}
                    className="h-3 bg-orange-100"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{profile.booksRead} books read</span>
                    <span>{Math.round(readingProgress)}% complete</span>
                    <span>
                      {profile.readingGoal - profile.booksRead} books remaining
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-orange-100">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <BookMarked className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Books</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.totalBooks}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Currently Reading</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.currentlyReading}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stats.completed}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-orange-100 rounded-lg mr-4">
                    <Star className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg Rating</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {profile.averageRating}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Favorite Genres */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle>Favorite Genres</CardTitle>
                <CardDescription>
                  Your most read book categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.favoriteGenres.map((genre, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-500" />
                    Reading Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Pages Read</span>
                    <span className="font-semibold">
                      {profile.totalPages.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Books This Month</span>
                    <span className="font-semibold">{stats.thisMonth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Books This Year</span>
                    <span className="font-semibold">{stats.thisYear}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold">
                      {profile.averageRating}/5
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-orange-500" />
                    Reading Streaks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Streak</span>
                    <span className="font-semibold text-orange-600">
                      {profile.currentStreak} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Longest Streak</span>
                    <span className="font-semibold">
                      {profile.longestStreak} days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Want to Read</span>
                    <span className="font-semibold">{stats.wantToRead}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sample achievements */}
              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First Book
                  </h3>
                  <p className="text-sm text-gray-600">
                    Completed your first book
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookMarked className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Bookworm</h3>
                  <p className="text-sm text-gray-600">Read 10 books</p>
                </CardContent>
              </Card>

              <Card className="border-orange-100 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Goal Crusher
                  </h3>
                  <p className="text-sm text-gray-600">Reached reading goal</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-orange-500" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Manage your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-updates">Email Updates</Label>
                    <p className="text-sm text-gray-500">
                      Receive updates about new features
                    </p>
                  </div>
                  <Switch
                    id="email-updates"
                    checked={notifications.emailUpdates}
                    onCheckedChange={(checked: any) =>
                      setNotifications({
                        ...notifications,
                        emailUpdates: checked,
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reading-reminders">Reading Reminders</Label>
                    <p className="text-sm text-gray-500">
                      Daily reminders to read
                    </p>
                  </div>
                  <Switch
                    id="reading-reminders"
                    checked={notifications.readingReminders}
                    onCheckedChange={(checked: any) =>
                      setNotifications({
                        ...notifications,
                        readingReminders: checked,
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="book-recommendations">
                      Book Recommendations
                    </Label>
                    <p className="text-sm text-gray-500">
                      Personalized book suggestions
                    </p>
                  </div>
                  <Switch
                    id="book-recommendations"
                    checked={notifications.bookRecommendations}
                    onCheckedChange={(checked: any) =>
                      setNotifications({
                        ...notifications,
                        bookRecommendations: checked,
                      })
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="community-activity">
                      Community Activity
                    </Label>
                    <p className="text-sm text-gray-500">
                      Updates from the BookVerse community
                    </p>
                  </div>
                  <Switch
                    id="community-activity"
                    checked={notifications.communityActivity}
                    onCheckedChange={(checked: any) =>
                      setNotifications({
                        ...notifications,
                        communityActivity: checked,
                      })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Settings
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-200 text-red-600 hover:bg-red-50"
                >
                  <X className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
