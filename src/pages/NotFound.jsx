import { Home, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
export default function NotFound({ navigate }) { return <main className="not-found"><span>404</span><h1>Page not found</h1><p>The demo route you opened does not exist.</p><Button onClick={()=>navigate('/')}>Back Home <Home size={16}/></Button></main> }
