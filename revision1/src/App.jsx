
import Card from "./components/Card";

function App(){
  const jobOpenings = [
  {
    brandLogo: 'https://logo.clearbit.com/amazon.com',
    companyName: 'Amazon',
    datePosted: '5 days ago',
    roll: 'Senior UI/UX Designer',
    tag: ['Full Time', 'Senior level'],
    charges: '$120/hr',
    loc: 'Mumbai, India',
  },
  {
    brandLogo: 'data:image/png;base64,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',
    companyName: 'Google',
    datePosted: '2 days ago',
    roll: 'Frontend Developer',
    tag: ['Full Time', 'Mid level'],
    charges: '$95/hr',
    loc: 'Bangalore, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/microsoft.com',
    companyName: 'Microsoft',
    datePosted: '1 week ago',
    roll: 'Cloud Solutions Architect',
    tag: ['Full Time', 'Senior level'],
    charges: '$140/hr',
    loc: 'Hyderabad, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/meta.com',
    companyName: 'Meta',
    datePosted: '3 days ago',
    roll: 'React Native Developer',
    tag: ['Contract', 'Mid level'],
    charges: '$85/hr',
    loc: 'Remote, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/apple.com',
    companyName: 'Apple',
    datePosted: '1 day ago',
    roll: 'iOS Developer',
    tag: ['Full Time', 'Senior level'],
    charges: '$130/hr',
    loc: 'Pune, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/netflix.com',
    companyName: 'Netflix',
    datePosted: '4 days ago',
    roll: 'Backend Engineer',
    tag: ['Full Time', 'Mid level'],
    charges: '$110/hr',
    loc: 'Mumbai, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/tesla.com',
    companyName: 'Tesla',
    datePosted: '6 days ago',
    roll: 'Embedded Systems Engineer',
    tag: ['Full Time', 'Senior level'],
    charges: '$125/hr',
    loc: 'Bangalore, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/linkedin.com',
    companyName: 'LinkedIn',
    datePosted: '3 weeks ago',
    roll: 'Product Manager',
    tag: ['Full Time', 'Senior level'],
    charges: '$115/hr',
    loc: 'Hyderabad, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/slack.com',
    companyName: 'Slack',
    datePosted: '1 week ago',
    roll: 'QA Automation Engineer',
    tag: ['Contract', 'Junior level'],
    charges: '$65/hr',
    loc: 'Remote, India',
  },
  {
    brandLogo: 'https://logo.clearbit.com/stripe.com',
    companyName: 'Stripe',
    datePosted: '2 days ago',
    roll: 'Data Scientist',
    tag: ['Full Time', 'Mid level'],
    charges: '$100/hr',
    loc: 'Bangalore, India',
  },
];

  return(
    <>
    {
      jobOpenings.map((cardObj,idx)=>{
        return <div key={idx}>
          <Card desc={cardObj}/>
          </div>
      })
    }
    </>
  )
}

export default App;