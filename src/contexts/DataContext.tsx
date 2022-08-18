import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  login: string
  name: string
  bio: string
  avatar_url: string
  html_url: string
  followers: number
  location: string
}

export interface Issue {
  html_url: string
  number: number
  title: string
  user: User
  created_at: string
  body: string
  comments: number
}

interface IContextData {
  issues: Issue[]
  user: User
  loadIssues: (query: string) => void
  isLoading: boolean
}

interface PostProviderProps {
  children: ReactNode
}

const DataContext = createContext({} as IContextData)

export function PostProvider({ children }: PostProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function loadUser() {
    const response = await api.get('users/bfukumori')
    const userData = response.data
    setUser(userData)
  }

  async function loadIssues(query: string = '') {
    const response = await api.get(
      `search/issues?q=${query}repo:bfukumori/github-blog`,
    )
    const data = response.data
    const issues = data.items
    setIssues(issues)
    setIsLoading(false)
  }

  useEffect(() => {
    loadUser()
    loadIssues()
  }, [])

  return (
    <DataContext.Provider value={{ user, issues, loadIssues, isLoading }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
