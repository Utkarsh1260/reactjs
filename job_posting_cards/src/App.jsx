import Card from './components/Card'
import User from './components/User'

const App = () => {

  // array of objects
  const jobOpenings = [
    {
      brandLogo: "https://images.unsplash.com/photo-1678483790096-26cc771a9dc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvb2dsZSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
      companyName: "Google",
   jobRole: "Backend Developer Intern",
  posted: "3 days ago",
  tag1: "remote",
  tag2: "fresher",
  payout: "$18/hour",
  tag3: "internship",
  duration: "4 months",
  stipend: "$1300/month",
  location: "Remote",
  timePerDay: "6 hours",
  prerequisites: "Basic knowledge of server-side programming",
  requiredSkills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1662947368770-7cf87e565cdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
      companyName: "Amazon",
  jobRole: "Full Stack Developer Intern",
  posted: "1 week ago",
  tag1: "hybrid",
  tag2: "junior level",
  payout: "$22/hour",
  tag3: "internship",
  duration: "6 months",
  stipend: "$1800/month",
  location: "Bangalore, India",
  timePerDay: "7 hours",
  prerequisites: "Understanding of frontend and backend basics",
  requiredSkills: ["React", "Node.js", "MongoDB", "JavaScript"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1636051028886-0059ad2383c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWV0YSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
      companyName: "Meta",
        jobRole: "UI/UX Designer Intern",
  posted: "2 weeks ago",
  tag1: "onsite",
  tag2: "fresher",
  payout: "$15/hour",
  tag3: "internship",
  duration: "3 months",
  stipend: "$1200/month",
  location: "Delhi, India",
  timePerDay: "5 hours",
  prerequisites: "Basic design principles",
  requiredSkills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1714251033127-9401d0adaaac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBsb2dvfGVufDB8fDB8fHww",
      companyName: "Apple",
jobRole: "Data Analyst Intern",
  posted: "4 days ago",
  tag1: "remote",
  tag2: "entry level",
  payout: "$19/hour",
  tag3: "internship",
  duration: "5 months",
  stipend: "$1600/month",
  location: "Remote",
  timePerDay: "6 hours",
  prerequisites: "Basic statistics knowledge",
  requiredSkills: ["Python", "Excel", "SQL", "Data Visualization"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
      companyName: "Netflix",
       jobRole: "Android Developer Intern",
  posted: "6 days ago",
  tag1: "onsite",
  tag2: "fresher",
  payout: "$17/hour",
  tag3: "internship",
  duration: "4 months",
  stipend: "$1400/month",
  location: "Hyderabad, India",
  timePerDay: "7 hours",
  prerequisites: "Basic Android development knowledge",
  requiredSkills: ["Kotlin", "Java", "Android Studio", "APIs"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
      companyName: "Microsoft",
      jobRole: "DevOps Intern",
  posted: "3 weeks ago",
  tag1: "remote",
  tag2: "junior level",
  payout: "$23/hour",
  tag3: "internship",
  duration: "6 months",
  stipend: "$2000/month",
  location: "Remote",
  timePerDay: "6 hours",
  prerequisites: "Understanding of CI/CD and cloud basics",
  requiredSkills: ["Docker", "Kubernetes", "AWS", "Linux"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1662947475743-35a389428742?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzbGElMjBsb2dvfGVufDB8fDB8fHww",
      companyName: "Tesla",
       jobRole: "Machine Learning Intern",
  posted: "2 days ago",
  tag1: "remote",
  tag2: "entry level",
  payout: "$25/hour",
  tag3: "internship",
  duration: "6 months",
  stipend: "$2200/month",
  location: "Remote",
  timePerDay: "6 hours",
  prerequisites: "Basic ML concepts and Python",
  requiredSkills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"]
    },
    {
      brandLogo: "https://images.unsplash.com/photo-1649734926700-8dfb770ffaee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvYmUlMjBsb2dvfGVufDB8fDB8fHww",
      companyName: "Adobe",
    jobRole: "QA Tester Intern",
  posted: "1 week ago",
  tag1: "onsite",
  tag2: "fresher",
  payout: "$14/hour",
  tag3: "internship",
  duration: "3 months",
  stipend: "$1100/month",
  location: "Pune, India",
  timePerDay: "5 hours",
  prerequisites: "Basic software testing knowledge",
  requiredSkills: ["Manual Testing", "Selenium", "Test Cases", "Bug Tracking"]
    },
  
  ];

  console.log(jobOpenings)




  return (
    <div className='parent'>

    {jobOpenings.map(function(elem,idx){
      return   <div key={idx}>
        <Card name={elem.companyName} jobrole={elem.jobRole} posted={elem.posted} image={elem.brandLogo} location={elem.location} payout={elem.payout} tag1={elem.tag1} tag2={elem.tag2}/>
      </div>
    })}

    </div>
  )
}

export default App
