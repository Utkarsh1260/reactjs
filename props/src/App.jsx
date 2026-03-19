import React from 'react'
import Card from './components/Card'
import ai1 from "./assets/images/ai_resume_analyzer.png";
import ai2 from "./assets/images/smart_customer_support_bot.png";
import ai3 from "./assets/images/predictive_sales_intelligence.png";
import ai4 from "./assets/images/ai_content_generator.png";

const App = (props) => {
  return (
    <div className="card1">
      <Card user='AI Resume Analyzer' categ='HR Tech / Recruitment AI' image={ai1}   desc='An intelligent resume screening system that leverages machine learning to analyze candidate profiles, rank applicants, and reduce hiring time by up to 70%. Designed for modern HR teams to make faster and smarter hiring decisions'/>
      
      <Card user='Smart Customer Support Bot' categ='AI Chatbot / Customer Experience' image={ai2}   desc='A conversational AI chatbot that handles customer queries 24/7, improves response time, and enhances customer satisfaction. Built with NLP for human-like interaction.'/>
     
      <Card user='Predictive Sales Intelligence' categ='Business Analytics / AI' image={ai3}   desc='An AI-driven analytics tool that predicts customer behavior, identifies high-value leads, and boosts sales performance using data-driven insights.'/>
     
      <Card user='AI Content Generator' categ='Marketing AI / Content Automation' image={ai4}   desc='A powerful AI tool that generates high-quality content for blogs, ads, and social media. Helps businesses scale content creation efficiently.'/>
      
    </div>
  )
}

export default App
