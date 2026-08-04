import { ArrowLeft, Zap, BookOpen, Cpu, Users, Target, Heart, Lightbulb, Rocket } from 'lucide-react';
import { Button, Card } from '../../components/ui/index';
import { Link } from 'react-router-dom';
import image from '@/assets/images/logoOld.png';
import AbdallahNabil from '@/assets/images/Team/Abdallah Nabil.jpeg';
import AlZahraaHassan from '@/assets/images/Team/Al-Zahraa Hassan.jpg';
import KhaledNashat from '@/assets/images/Team/kHaled Nashat.jpeg';
import MahmoudSerag from '@/assets/images/Team/Mahmoud Serag.jpeg';
import MennaAbdelaziz from '@/assets/images/Team/Menna Abdelaziz.jpg';
import MohamedElshahaby from '@/assets/images/Team/Mohamed ELshahaby.jpeg';
import MohamedGamal from '@/assets/images/Team/Mohamed Gamal.jpeg';
import MohamedMetwaly from '@/assets/images/Team/Mohamed Metwaly.jpeg';
import OmarAzzam from '@/assets/images/Team/Omar Azzam.jpeg';
import ZiyadFouda from '@/assets/images/Team/Ziad Fouda.jpeg';
const team = [
  {
    name: 'Mahmoud Serag',
    role: 'Mobile App Developer',
    bio: 'Leading the AI team and developing intelligent learning solutions.',
    image: MahmoudSerag,
    link: 'https://github.com/mahmoudserrag',
  },
  {
    name: 'Abdallah Nabil',
    role: 'Frontend Developer',
    bio: 'Building modern, responsive, and interactive user interfaces.',
    image: AbdallahNabil,
    link: 'https://www.linkedin.com/in/0xabdallah-nabil/',
  },
  {
    name: 'Omar Azzam',
    role: 'AI Engineer & Team Leader',
    bio: 'Building seamless and responsive web applications.',
    image: OmarAzzam,
    link: 'https://www.linkedin.com/in/omar1azzam/',
  },
  {
    name: 'Menna Abdelaziz',
    role: 'AI Engineer',
    bio: 'Working on AI-powered educational technologies.',
    image: MennaAbdelaziz,
    link: 'https://www.linkedin.com/in/menna-abdelaziz-964a87351/',
  },
  {
    name: 'Al-Zahraa Elghandour',
    role: 'Mobile App Developer',
    bio: 'Building seamless and responsive mobile applications.',
    image: AlZahraaHassan,
    link: 'https://www.linkedin.com/in/al-zahraa-elghandour-449620249/',
  },
  {
    name: 'Mohamed M. Metwally',
    role: 'UI/UX Designer',
    bio: 'Designing intuitive and engaging user experiences.',
    image: MohamedMetwaly,
    link: 'https://www.linkedin.com/in/mohamed-m-metwally-profile/',
  },
  {
    name: 'Mohamed Gamal',
    role: 'Backend Developer',
    bio: 'Developing secure and high-performance backend systems.',
    image: MohamedGamal,
    link: 'https://www.linkedin.com/in/m0hamed-gamall/',
  },
  {
    name: 'Ziyad Fouda',
    role: 'AI Engineer',
    bio: 'Developing AI models and intelligent content generation systems.',
    image: ZiyadFouda,
    link: 'https://www.linkedin.com/in/zfouda/',
  },
  {
    name: 'Khaled Nashat',
    role: 'Backend Developer',
    bio: 'Designing scalable backend services and APIs.',
    image: KhaledNashat,
    link: 'https://www.linkedin.com/in/khaled-nashat-a85193257/',
  },
  {
    name: 'Mohamed Elshahaby',
    role: 'Backend Developer',
    bio: 'Building reliable backend architecture and services.',
    image: MohamedElshahaby,
    link: 'https://www.linkedin.com/in/mohamedelshahabya852277/',
  },
];

const timeline = [
  { step: 1, title: 'Upload', description: 'Upload your PDF textbook or document' },
  { step: 2, title: 'Extract', description: 'AI extracts and analyzes content structure' },
  { step: 3, title: 'Structure', description: 'Content is organized into sections and lectures' },
  { step: 4, title: 'Generate', description: 'Video lectures are generated with AI voices' },
  { step: 5, title: 'Quiz', description: 'Smart quizzes are auto-generated for each section' },
  { step: 6, title: 'Learn', description: 'Start learning with your personalized course' },
];

const values = [
  { icon: Heart, title: 'Accessibility', description: 'Quality education should be available to everyone, everywhere.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We push boundaries of what AI can do for learning.' },
  { icon: Users, title: 'Community', description: 'Learning is better together. We foster collaboration.' },
  { icon: Target, title: 'Impact', description: 'Every feature we build aims to improve learning outcomes.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={image} alt="Genlearn" className='w-12' />
            <span className="text-xl font-bold text-gray-900">GenLearn</span>
          </Link>
          <Link to="/">
            <Button variant="ghost"><ArrowLeft className="w-4 h-4" />Back</Button>
          </Link>
        </div>
      </header>


      {/* Why GenLearn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why GenLearn?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We solve the fundamental problems that prevent people from accessing quality education.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Content Overload</h3>
              <p className="text-gray-600">Transform overwhelming PDFs into digestible video lessons that make learning easy and enjoyable.</p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary-100 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Time Constraint</h3>
              <p className="text-gray-600">Course creation that once took months now takes minutes. Learn at your own pace, on your schedule.</p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Access Barrier</h3>
              <p className="text-gray-600">Quality education shouldn't cost a fortune. We're making it accessible to everyone, everywhere.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From PDF to interactive course in six simple steps powered by cutting-edge AI.
            </p>
          </div>
          <div className="grid lg:grid-cols-6 gap-4">
            {timeline.map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {idx < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're educators, engineers, and dreamers united by a passion for accessible learning.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-transform hover:-translate-y-1"
              >
                <Card className="!p-0 overflow-hidden h-full">
                  <div className="aspect-square relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-white/80">{member.role}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Future of Learning</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We're just getting started. Our vision is a world where anyone can learn anything, anywhere, through AI-powered personalized education that adapts to their unique learning style.
          </p>
          <Link to="/sign-up" >
            <Button size="lg" variant="secondary">
              Join the Revolution
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
