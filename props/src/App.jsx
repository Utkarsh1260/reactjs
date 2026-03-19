import React from 'react'
import Card from './components/Card'
import ai1 from "./assets/images/ai_resume_analyzer.png";
import ai2 from "./assets/images/smart_customer_support_bot.png";
import ai3 from "./assets/images/predictive_sales_intelligence.png";
import ai4 from "./assets/images/ai_content_generator.png";

const App = (props) => {
  return (
    <div className="card1">
      <Card user='AI Resume Analyzer' categ='HR Tech / Recruitment AI' image={ai1}   
      desc='AI-powered resume screening platform that analyzes 1000+ profiles in seconds, reduces hiring time by 70%, and improves candidate shortlisting accuracy by 85% for modern HR teams.'/>
      
      <Card user='Smart Customer Support Bot' categ='AI Chatbot / Customer Experience' image={ai2}   desc='24/7 AI chatbot handling 10,000+ customer queries daily, reducing response time by 80% and increasing customer satisfaction by 60% using NLP-based interactions.'/>
     
      <Card user='Predictive Sales Intelligence' categ='Business Analytics / AI' image={ai3}   desc='Advanced analytics tool processing large datasets to predict customer behavior with 90% accuracy, increasing sales conversions by 35% and optimizing decision-making.'/>
     
      <Card user='AI Content Generator' categ='Marketing AI / Content Automation' image={ai4}   desc='AI-driven content engine generating blogs, ads, and social media posts 5x faster, improving marketing efficiency by 75% and reducing manual effort significantly.'/>
      
    </div>
  )
}

export default App
