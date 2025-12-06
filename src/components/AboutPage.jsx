import { Target, Lightbulb, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjYyNzQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Michael Chen",
      role: "Head of Data Science",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYyNTQ0MjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJlZGljdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI2Mjc0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "David Kumar",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMEFJfGVufDF8fHx8MTc2MjU5MTM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We provide precise, AI-powered estimates that help patients make informed medical decisions and plan their finances better."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering advanced machine learning technology to transform healthcare accessibility, empowering millions of patients with transparent medical cost information and insurance guidance."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your health data is protected with industry-leading encryption and security measures, complying with healthcare data protection regulations."
    }
  ];

  const problems = [
    {
      icon: TrendingUp,
      title: "Unpredictable Costs",
      description: "Medical expenses in India are highly variable, leading to financial stress and difficulty in planning healthcare expenses."
    },
    {
      icon: Shield,
      title: "Insurance Complexity",
      description: "Understanding insurance coverage and estimating out-of-pocket expenses is challenging, making it difficult to budget for healthcare coverage."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#005BEA]/5 via-white to-[#00C6FB]/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#005BEA] to-[#00C6FB] bg-clip-text text-transparent">
              About MediPredict
            </h1>
            <p className="text-lg text-gray-600">
              Revolutionizing healthcare decision-making in India through artificial intelligence and machine learning
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Privacy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <CardContent className="pt-6">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#005BEA] to-[#00C6FB] flex items-center justify-center mb-6">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-gradient-to-br from-[#005BEA]/5 to-[#00C6FB]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Problems We Solve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Addressing critical challenges in the Indian healthcare system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#005BEA]/5 to-[#00C6FB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center space-y-4">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005BEA] to-[#00C6FB] shadow-lg group-hover:scale-110 transition-transform">
                    <problem.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-[#005BEA] transition-colors">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                  
                  {/* Decorative bottom element */}
                  <div className="flex justify-center pt-2">
                    <div className="h-1 w-16 bg-gradient-to-r from-[#005BEA] to-[#00C6FB] rounded-full group-hover:w-24 transition-all"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AI/ML Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                How Our AI Works
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  MediPredict uses advanced machine learning algorithms trained on extensive datasets of Indian healthcare costs, insurance claims, and medical treatments.
                </p>
                <p>
                  Our models analyze multiple factors including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Patient demographics and medical history</li>
                  <li>Disease type and severity classification</li>
                  <li>Treatment protocols and medication costs</li>
                  <li>Hospital pricing patterns across regions</li>
                  <li>Insurance policy coverage and claim patterns</li>
                  <li>Historical claim approval rates</li>
                </ul>
                <p>
                  The AI continuously learns from new data to improve prediction accuracy, ensuring you get the most reliable cost estimates possible.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#005BEA]/20 to-[#00C6FB]/20 rounded-3xl blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJlZGljdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI2Mjc0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Healthcare Analytics"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#005BEA]/5 to-[#00C6FB]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to transforming healthcare accessibility in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4 text-center">
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#005BEA] to-[#00C6FB] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-white/80">Predictions Made</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-white/80">Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="text-white/80">Happy Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}