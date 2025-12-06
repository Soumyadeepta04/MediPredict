import React from "react";
import { useState } from "react";
import {
  Activity,
  BarChart3,
  FileText,
  Home,
  LogOut,
  Shield,
  User,
  Upload,
  Calendar,
  DollarSign,
  AlertCircle,
  TrendingUp,
  Hospital,
  LayoutDashboard,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export function DashboardPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    disease: "",
    insurancePolicy: "",
    medicineCost: "",
  });

  const [showResults, setShowResults] = useState(false);
  const [showPredictionResults, setShowPredictionResults] = useState(false);
  const [showInsuranceResults, setShowInsuranceResults] = useState(false);

  // Mock data for charts
  const monthlyCostData = [
    { month: "Jan", cost: 5200 },
    { month: "Feb", cost: 5500 },
    { month: "Mar", cost: 4800 },
    { month: "Apr", cost: 6100 },
    { month: "May", cost: 5900 },
    { month: "Jun", cost: 6300 },
  ];

  const insuranceBreakdown = [
    { category: "Covered", amount: 75 },
    { category: "Out of Pocket", amount: 25 },
  ];

  const costBreakdown = [
    {
      id: 1,
      category: "Consultation",
      cost: "$2,500",
      hospital: "City Medical Center",
    },
    {
      id: 2,
      category: "Lab Tests",
      cost: "$1,000",
      hospital: "HealthLab Pro",
    },
    {
      id: 3,
      category: "Medication",
      cost: "$3,000",
      hospital: "Metro Pharmacy",
    },
    {
      id: 4,
      category: "Follow-up",
      cost: "$1,000",
      hospital: "City Medical Center",
    },
    { id: 5, category: "Imaging", cost: "$1,500", hospital: "RadiologyPlus" },
  ];

  const patientRecords = [
    {
      id: 1,
      name: "John Doe",
      disease: "Diabetes Type 2",
      prediction: "$1,500/month",
      date: "2024-01-15",
      risk: "Medium",
    },
    {
      id: 2,
      name: "Jane Smith",
      disease: "Hypertension",
      prediction: "$1,200/month",
      date: "2024-01-20",
      risk: "Low",
    },
    {
      id: 3,
      name: "Mike Johnson",
      disease: "Heart Disease",
      prediction: "$2,800/month",
      date: "2024-02-01",
      risk: "High",
    },
    {
      id: 4,
      name: "Sarah Williams",
      disease: "Asthma",
      prediction: "$1,200/month",
      date: "2024-02-10",
      risk: "Low",
    },
  ];

  const handlePredictionSubmit = (e) => {
    e.preventDefault();
    setShowPredictionResults(true);
  };

  const handleInsuranceSubmit = (e) => {
    e.preventDefault();
    const h = parseFloat(formData.height);
    const w = parseFloat(formData.weight);
    if (h && w) {
      const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);
      setFormData({ ...formData, bmi });
    }
    setShowInsuranceResults(true);
  };

  const handleLogout = () => {
    onNavigate("home");
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
    { icon: FileText, label: "Predictions", id: "predictions" },
    { icon: TrendingUp, label: "Analytics", id: "analytics" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r flex flex-col transform transition-transform duration-300 ease-in-out ${
        isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#005BEA] to-[#00C6FB]">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#005BEA] to-[#00C6FB] bg-clip-text text-transparent">
                MediPredict
              </span>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-[#005BEA] to-[#00C6FB] text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 hover:shadow-md"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:shadow-md transition-all cursor-pointer"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3">
              {/* Hamburger Menu for Mobile */}
              <button
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Menu className="h-6 w-6 text-gray-600" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Welcome back, User!</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                  Here's your health prediction overview
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-[#005BEA] to-[#00C6FB] cursor-pointer hover:scale-110 transition-transform">
                <AvatarFallback className="text-white text-sm">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Monthly Medical Cost */}
                <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Monthly Medical Cost
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-[#005BEA]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹11,200</div>
                    <p className="text-xs text-gray-600 mt-1">
                      <span className="text-green-600">↑ 8.2%</span> from last
                      month
                    </p>
                  </CardContent>
                </Card>

                {/* Insurance Premium Cost */}
                <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">
                      Insurance Premium Cost
                    </CardTitle>
                    <Shield className="h-4 w-4 text-[#00C6FB]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹12,000/year</div>
                    <p className="text-xs text-gray-600 mt-1">
                      Calculated based on your health profile
                    </p>
                  </CardContent>
                </Card>

                {/* Disease Type */}
                <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Disease Type</CardTitle>
                    <Activity className="h-4 w-4 text-purple-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Chronic</div>
                    <p className="text-xs text-gray-600 mt-1">
                      Long-term management
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Medical Cost Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Medical Cost Trend</CardTitle>
                    <CardDescription>
                      Your medical expenses over the last 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyCostData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="cost"
                          stroke="#005BEA"
                          strokeWidth={2}
                          name="Medical Cost (₹)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Monthly Premium Cost Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Insurance Premium Trend</CardTitle>
                    <CardDescription>
                      Projected monthly premium costs over 6 months
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyCostData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="cost"
                          fill="#00C6FB"
                          name="Premium Cost (₹)"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Medical Cost Prediction Table */}
              <Card className="w-full lg:col-span-2">
                <CardHeader>
                  <CardTitle>Medical Cost Predictions</CardTitle>
                  <CardDescription>
                    Historical prediction data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Disease</TableHead>
                        <TableHead className="text-right">
                          Predicted Monthly Cost (₹)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          date: "2024-01-15",
                          disease: "Diabetes Type 2",
                          cost: "₹1,500",
                        },
                        {
                          id: 2,
                          date: "2024-01-20",
                          disease: "Hypertension",
                          cost: "₹1,200",
                        },
                        {
                          id: 3,
                          date: "2024-02-01",
                          disease: "Heart Disease",
                          cost: "₹2,800",
                        },
                        {
                          id: 4,
                          date: "2024-02-10",
                          disease: "Asthma",
                          cost: "₹1,200",
                        },
                      ].map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.disease}</TableCell>
                          <TableCell className="text-right">
                            {item.cost}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Insurance Premium Prediction Table */}
              <Card className="mt-6 w-full lg:col-span-2">
                <CardHeader>
                  <CardTitle>Insurance Premium Predictions</CardTitle>
                  <CardDescription>
                    Historical premium predictions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">
                          Predicted Monthly Premium Cost (₹)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { id: 1, date: "2024-01-15", premium: "₹1,200" },
                        { id: 2, date: "2024-02-01", premium: "₹2,900" },
                        { id: 3, date: "2024-03-10", premium: "₹3,000" },
                        { id: 4, date: "2024-04-05", premium: "₹4,800" },
                      ].map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell className="text-right">
                            {item.premium}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Predictions Tab */}
          {activeTab === "predictions" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#005BEA]" />
                    Medical Cost Prediction
                  </CardTitle>
                  <CardDescription>
                    Enter your details to get a predicted monthly medical cost
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handlePredictionSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Age */}
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Enter your age"
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                        />
                      </div>

                      {/* Gender */}
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            setFormData({ ...formData, gender: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Disease Name */}
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="disease">Disease Name</Label>
                        <Input
                          id="disease"
                          placeholder="e.g., Diabetes, Hypertension"
                          value={formData.disease}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              disease: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* File Upload (Multiple, No Limit) */}
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="medical-file">
                          Upload Medical Reports
                        </Label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-[#005BEA] transition-colors relative">
                          <input
                            id="medical-file"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            multiple
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                files: Array.from(e.target.files),
                              })
                            }
                          />
                          <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm text-gray-600">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            PDF, JPG, PNG (No file limit)
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#005BEA] to-[#00C6FB] hover:opacity-90"
                      size="lg"
                    >
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Generate Prediction
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* --- Results Section --- */}
              {showPredictionResults && (
                <Card className="border-2 border-[#005BEA]">
                  <CardHeader>
                    <CardTitle className="text-[#005BEA]">
                      Prediction Results
                    </CardTitle>
                    <CardDescription>
                      Based on your submitted information
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Estimated Cost Only */}
                    <div className="p-4 bg-gradient-to-br from-[#005BEA]/10 to-[#00C6FB]/10 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">
                        Estimated Monthly Cost
                      </p>
                      <p className="text-3xl text-[#005BEA] font-bold">
                        ₹12,500
                      </p>
                    </div>

                    {/* Monthly Expenditure Trend */}
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            { month: "Jan", cost: 11000 },
                            { month: "Feb", cost: 11500 },
                            { month: "Mar", cost: 12000 },
                            { month: "Apr", cost: 12200 },
                            { month: "May", cost: 12400 },
                            { month: "Jun", cost: 12500 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip formatter={(value) => `₹${value}`} />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="cost"
                            stroke="#005BEA"
                            strokeWidth={2.5}
                            dot={{ r: 5 }}
                            name="Monthly Cost (₹)"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#005BEA]" />
                    Insurance Premium Estimator
                  </CardTitle>
                  <CardDescription>
                    Enter your details to get an estimated monthly insurance
                    premium
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleInsuranceSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Age */}
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Enter your age"
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                        />
                      </div>

                      {/* Gender */}
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            setFormData({ ...formData, gender: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Height */}
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          type="number"
                          placeholder="Enter height in cm"
                          value={formData.height || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, height: e.target.value })
                          }
                        />
                      </div>

                      {/* Weight */}
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          type="number"
                          placeholder="Enter weight in kg"
                          value={formData.weight || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, weight: e.target.value })
                          }
                        />
                      </div>

                      {/* BMI (Auto Calculated) */}
                      <div className="space-y-2">
                        <Label htmlFor="bmi">BMI (Auto Calculated)</Label>
                        <Input
                          id="bmi"
                          type="text"
                          readOnly
                          placeholder="Will be calculated automatically"
                          value={formData.bmi || ""}
                          className="bg-gray-100"
                        />
                      </div>

                      {/* Smoking Status */}
                      <div className="space-y-2">
                        <Label htmlFor="smoking">Smoking Status</Label>
                        <Select
                          value={formData.smoking || ""}
                          onValueChange={(value) =>
                            setFormData({ ...formData, smoking: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select smoking status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="smoker">Smoker</SelectItem>
                            <SelectItem value="non-smoker">
                              Non-Smoker
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Region */}
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="region">Region</Label>
                        <Select
                          value={formData.region || ""}
                          onValueChange={(value) =>
                            setFormData({ ...formData, region: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="north">North</SelectItem>
                            <SelectItem value="south">South</SelectItem>
                            <SelectItem value="east">East</SelectItem>
                            <SelectItem value="west">West</SelectItem>
                            <SelectItem value="northwest">
                              North West
                            </SelectItem>
                            <SelectItem value="northeast">
                              North East
                            </SelectItem>
                            <SelectItem value="southwest">
                              South West
                            </SelectItem>
                            <SelectItem value="southeast">
                              South East
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#005BEA] to-[#00C6FB] hover:opacity-90"
                      size="lg"
                    >
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Generate Premium Cost
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Results Section */}
              {showInsuranceResults && (
                <Card className="border-2 border-[#005BEA]">
                  <CardHeader>
                    <CardTitle className="text-[#005BEA]">
                      Insurance Premium Results
                    </CardTitle>
                    <CardDescription>
                      Based on your provided details
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Premium Value */}
                    <div className="p-4 bg-gradient-to-br from-[#005BEA]/10 to-[#00C6FB]/10 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">
                        Estimated Monthly Premium
                      </p>
                      <p className="text-3xl text-[#005BEA] font-bold">
                        ₹4,800
                      </p>
                    </div>

                    {/* Monthly Premium Distribution Pie Chart */}
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Base Premium", value: 800 },
                              { name: "Age Factor", value: 1000 },
                              { name: "Health Factor", value: 1200 },
                              { name: "BMI Factor", value: 800 },
                              { name: "Smoking Factor", value: 600 },
                              { name: "Regional Factor", value: 400 },
                            ]}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#005BEA"
                            label={({ name, value }) => `${name}: ₹${value}`}
                          >
                            <Cell fill="#005BEA" />
                            <Cell fill="#0078F0" />
                            <Cell fill="#00A8FB" />
                            <Cell fill="#00C6FB" />
                            <Cell fill="#6BD6FF" />
                            <Cell fill="#B3E5FF" />
                          </Pie>
                          <Tooltip
                            formatter={(value) => [`₹${value}`, "Premium"]}
                            contentStyle={{ borderRadius: "8px" }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardContent className="pt-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4 bg-gradient-to-br from-[#005BEA] to-[#00C6FB]">
                    <AvatarFallback className="text-white text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    john.doe@example.com
                  </p>
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name</Label>
                      <Input value="John Doe" />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value="john.doe@example.com" type="email" />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input value="+91 98765 43210" />
                    </div>
                    <div>
                      <Label>Date of Birth</Label>
                      <Input value="1990-01-15" type="date" />
                    </div>
                    <div>
                      <Label>Blood Group</Label>
                      <Select defaultValue="o-positive">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="o-positive">O+</SelectItem>
                          <SelectItem value="o-negative">O-</SelectItem>
                          <SelectItem value="a-positive">A+</SelectItem>
                          <SelectItem value="a-negative">A-</SelectItem>
                          <SelectItem value="b-positive">B+</SelectItem>
                          <SelectItem value="b-negative">B-</SelectItem>
                          <SelectItem value="ab-positive">AB+</SelectItem>
                          <SelectItem value="ab-negative">AB-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Emergency Contact</Label>
                      <Input value="+91 98765 12345" />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-[#005BEA] to-[#00C6FB] hover:opacity-90">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}