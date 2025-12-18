import React, { useState } from "react";
import {
  Activity,
  BarChart3,
  FileText,
  LogOut,
  Shield,
  LayoutDashboard,
  Settings,
  Menu,
  X,
  TrendingUp,
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
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import {
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
  const [showInsuranceResults, setShowInsuranceResults] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bmi: "",
    smoking: "",
    region: "",
  });

  /* ---------- MOCK DATA (Insurance Only) ---------- */

  const monthlyPremiumData = [
    { month: "Jan", premium: 3800 },
    { month: "Feb", premium: 4000 },
    { month: "Mar", premium: 4200 },
    { month: "Apr", premium: 4500 },
    { month: "May", premium: 4700 },
    { month: "Jun", premium: 4800 },
  ];

  const premiumHistory = [
    { id: 1, date: "2024-01-15", premium: "₹3,800" },
    { id: 2, date: "2024-02-01", premium: "₹4,200" },
    { id: 3, date: "2024-03-10", premium: "₹4,500" },
    { id: 4, date: "2024-04-05", premium: "₹4,800" },
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
    { icon: TrendingUp, label: "Premium Predictor", id: "premium" },
    { icon: Settings, label: "Settings", id: "settings" },
  ];

  const handleInsuranceSubmit = (e) => {
    e.preventDefault();

    const h = parseFloat(formData.height);
    const w = parseFloat(formData.weight);
    if (h && w) {
      const bmi = (w / (h / 100) ** 2).toFixed(1);
      setFormData({ ...formData, bmi });
    }
    setShowInsuranceResults(true);
  };

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
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r flex flex-col transform transition-transform duration-300 ${
          isMobileSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#005BEA] to-[#00C6FB]">
              <Activity className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#005BEA] to-[#00C6FB] bg-clip-text text-transparent">
              MediPredict
            </span>
          </div>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-[#005BEA] to-[#00C6FB] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={() => onNavigate("home")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50"
          >
            <LogOut />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-10">
          <div className="flex justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden"
                onClick={() => setIsMobileSidebarOpen(true)}
              >
                <Menu />
              </button>
              <div>
                <h1 className="text-xl font-bold">Welcome back!</h1>
                <p className="text-sm text-gray-600">
                  Insurance premium prediction overview
                </p>
              </div>
            </div>
            <Avatar className="bg-gradient-to-br from-[#005BEA] to-[#00C6FB]">
              <AvatarFallback className="text-white">JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Annual Insurance Premium</CardTitle>
                  </CardHeader>
                  <CardContent className="text-3xl font-bold">
                    ₹48,000
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Premium Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={monthlyPremiumData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="premium" fill="#00C6FB" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Premium Prediction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">
                          Monthly Premium
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {premiumHistory.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell className="text-right">
                            {row.premium}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </>
          )}

          {/* PREMIUM PREDICTOR */}
          {activeTab === "premium" && (
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
                            label={({
                              cx,
                              cy,
                              midAngle,
                              innerRadius,
                              outerRadius,
                              name,
                              value,
                            }) => {
                              const RADIAN = Math.PI / 180;
                              const radius =
                                innerRadius + (outerRadius - innerRadius) * 0.6;
                              const x =
                                cx + radius * Math.cos(-midAngle * RADIAN);
                              const y =
                                cy + radius * Math.sin(-midAngle * RADIAN);

                              return (
                                <text
                                  x={x}
                                  y={y}
                                  textAnchor="middle"
                                  dominantBaseline="central"
                                  fill="#ffffff"
                                  fontSize={8} // 🔥 change size here
                                  fontWeight={500}
                                >
                                  {`${name}: ₹${value}`}
                                </text>
                              );
                            }}
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

          {/* SETTINGS */}
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

/* ---------- Small Reusable Input ---------- */
function InputField({ label, id, formData, setFormData }) {
  return (
    <div>
      <Label>{label}</Label>
      <Input
        value={formData[id]}
        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
      />
    </div>
  );
}
