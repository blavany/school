import React from 'react';
import { Sun, Cloud, Sunrise, Sunset } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    {
      day: 'Monday',
      theme: 'Creative Day',
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      activities: [
        { time: '9:00 AM', activity: 'Art Class', color: 'bg-pink-100 text-pink-800' },
        { time: '10:30 AM', activity: 'Outdoor Play', color: 'bg-green-100 text-green-800' },
        { time: '2:00 PM', activity: 'Story Time', color: 'bg-purple-100 text-purple-800' }
      ]
    },
    {
      day: 'Tuesday',
      theme: 'Music Day',
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      activities: [
        { time: '9:00 AM', activity: 'Music & Dance', color: 'bg-blue-100 text-blue-800' },
        { time: '10:30 AM', activity: 'Numbers Fun', color: 'bg-yellow-100 text-yellow-800' },
        { time: '2:00 PM', activity: 'Creative Play', color: 'bg-red-100 text-red-800' }
      ]
    },
    {
      day: 'Wednesday',
      theme: 'Discovery Day',
      icon: <Sunrise className="w-6 h-6 text-orange-500" />,
      activities: [
        { time: '9:00 AM', activity: 'Science Exploration', color: 'bg-indigo-100 text-indigo-800' },
        { time: '10:30 AM', activity: 'Physical Activities', color: 'bg-green-100 text-green-800' },
        { time: '2:00 PM', activity: 'Language Skills', color: 'bg-purple-100 text-purple-800' }
      ]
    },
    {
      day: 'Thursday',
      theme: 'Adventure Day',
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      activities: [
        { time: '9:00 AM', activity: 'Drama & Theater', color: 'bg-pink-100 text-pink-800' },
        { time: '10:30 AM', activity: 'Nature Walk', color: 'bg-green-100 text-green-800' },
        { time: '2:00 PM', activity: 'Arts & Crafts', color: 'bg-blue-100 text-blue-800' }
      ]
    },
    {
      day: 'Friday',
      theme: 'Fun Day',
      icon: <Sunset className="w-6 h-6 text-red-500" />,
      activities: [
        { time: '9:00 AM', activity: 'Show & Tell', color: 'bg-yellow-100 text-yellow-800' },
        { time: '10:30 AM', activity: 'Group Games', color: 'bg-purple-100 text-purple-800' },
        { time: '2:00 PM', activity: 'Music Time', color: 'bg-blue-100 text-blue-800' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Weekly Schedule</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A balanced mix of activities designed to engage and develop your child throughout the week.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 px-4">
                <div className="flex items-center justify-center mb-2">
                  {day.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{day.day}</h3>
                <p className="text-sm text-blue-100 text-center">{day.theme}</p>
              </div>
              <div className="p-6">
                {day.activities.map((activity) => (
                  <div
                    key={activity.time}
                    className="mb-4 last:mb-0"
                  >
                    <p className="text-sm font-semibold text-gray-600 mb-1">{activity.time}</p>
                    <div className={`${activity.color} rounded-lg py-2 px-3 text-sm font-medium`}>
                      {activity.activity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;