import { FormEvent, useState } from 'react';
import {
  Bell, BookOpen, ChevronDown, ChevronRight, Computer, Grid2X2, Home,
  KeyRound, Mail, Menu, Search, GraduationCap,
} from 'lucide-react';

import studentPhoto from './assets/student-photo.png';

type Semester = 'I YEAR I SEM' | 'I YEAR II SEM' | 'II YEAR III SEM' | 'II YEAR IV SEM';
  const marks: Record<Semester, string[][]> = {
  'I YEAR I SEM': [
    ['1', 'U21BSN01MT', 'Engineering Mathematics - I', 'January-2025', 'A+', '4', 'Pass'],
    ['2', 'U21BSN01PH', 'Engineering Physics', 'January-2025', 'A+', '3', 'Pass'],
    ['3', 'U21HSN01EG', 'English', 'January-2025', 'A', '2', 'Pass'],
    ['4', 'U21ESN01CS', 'Programming For Problem Solving Using C', 'January-2025', 'B', '3', 'Pass'],
    ['5', 'U21MCN01PO', 'Indian Constitution', 'January-2025', 'C', '0', 'Pass'],
    ['6', 'U21ESN81CS', 'Programming For Problem Solving Using C Lab', 'January-2025', 'A', '2', 'Pass'],
    ['7', 'U21BSN81PH', 'ENGINEERING PHYSICS LAB', 'January-2025', 'A', '2', 'Pass'],
    ['8', 'U21HSN81EG', 'English Lab', 'January-2025', 'A+', '1', 'Pass'],
    ['9', 'U21ESN82ME', 'Basic Workshop Practice', 'January-2025', 'A+', '1', 'Pass'],
    ['10', 'U21BSN81MT', 'Computational Mathematics Lab', 'January-2025', 'A+', '1', 'Pass'],
  ],

  'I YEAR II SEM': [
    ['1', 'U21BSN02MT', 'Engineering Mathematics-II', 'July-2025', 'B', '3', 'Pass'],
    ['2', 'U21BSN01CH', 'Engineering Chemistry', 'July-2025', 'A+', '3', 'Pass'],
    ['3', 'U21ESN03CS', 'Programming for Problem solving using Python', 'July-2025', 'B', '4', 'Pass'],
    ['4', 'U21ESN01EE', 'Basic Electrical Engineering', 'July-2025', 'B', '3', 'Pass'],
    ['5', 'U21BSN81CH', 'Chemistry Lab', 'July-2025', 'A', '2', 'Pass'],
    ['6', 'U21ESN83CS', 'Programming for Problem solving using Python LAB', 'July-2025', 'B', '2', 'Pass'],
    ['7', 'U21ESN81EE', 'Basic Electrical Engineering Lab', 'July-2025', 'A', '1', 'Pass'],
    ['8', 'U21ESN82CE', 'Engineering Drawing Practice', 'July-2025', 'C', '1', 'Pass'],
  ],

  'II YEAR III SEM': [
    ['1', 'U21ES301CS', 'Logic And Switching Theory', 'January-2026', 'D', '3', 'Pass'],
    ['2', 'U21PC304CS', "Data Structures And Algorithms Using 'C'", 'January-2026', 'B', '3', 'Pass'],
    ['3', 'U21PC384CS', "Data Structures And Algorithms Using 'C' Lab", 'January-2026', 'B', '2', 'Pass'],
    ['4', 'U21PW381CS', 'Theme Based Project', 'January-2026', 'A+', '2', 'Pass'],
    ['5', 'U21HSN02EG', 'Effective Technical Communication in English', 'January-2026', 'A', '2', 'Pass'],
    ['6', 'U21PC301CS', 'Database Management Systems', 'January-2026', 'A', '3', 'Pass'],
    ['7', 'U21PC303CS', 'Discrete Mathematics', 'January-2026', 'D', '3', 'Pass'],
    ['8', 'U21HSN01CO', 'Finance and Accounting', 'January-2026', 'C', '3', 'Pass'],
    ['9', 'U21MCN01CE', 'Environmental Science', 'January-2026', 'B', '0', 'Pass'],
    ['10', 'U21PC381CS', 'Database Management Systems Lab', 'January-2026', 'A', '1', 'Pass'],
  ],

  'II YEAR IV SEM': [
    ['1', 'U21PCN01CS', 'Object Oriented Programming using Java', 'July-2026', 'B', '3', 'Pass'],
    ['2', 'U21BSN03MT', 'Engineering Mathematics-III', 'July-2026', 'A', '3', 'Pass'],
    ['3', 'U21PCA01CS', 'Design and Analysis of Algorithms', 'July-2026', 'C', '3', 'Pass'],
    ['4', 'U21PCN02CS', 'Software Engineering', 'July-2026', 'B', '3', 'Pass'],
    ['5', 'U21PCN03CS', 'Computer Organization', 'July-2026', 'B', '3', 'Pass'],
    ['6', 'U21PCA81CS', 'Object Oriented Programming using Java Lab', 'July-2026', 'C', '2', 'Pass'],
    ['7', 'U21PCNB1CS', 'Design and Analysis of Algorithms Lab', 'July-2026', 'A', '1', 'Pass'],
    ['8', 'U21PCNB2CS', 'Software Engineering Lab', 'July-2026', 'A', '1', 'Pass'],
  ],
};
const semesterResults: Record<Semester, {
  sgpa: string;
  cgpa: string;
  result: string;
}> = {
  'I YEAR I SEM': {
    sgpa: '9.37',
    cgpa: '9.37',
    result: 'Promoted',
  },
  'I YEAR II SEM': {
    sgpa: '8.42',
    cgpa: '8.89',
    result: 'Promoted',
  },
  'II YEAR III SEM': {
    sgpa: '7.77',
    cgpa: '8.48',
    result: 'Promoted',
  },
  'II YEAR IV SEM': {
    sgpa: '8.03',
    cgpa: '8.15',
    result: 'Promoted',
  },
};
function go(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function CollegeMark() {
  return <div className="college-mark"><div className="mark-tree">✦</div><span>MVSR</span></div>;
}

function Header({ onMenu }: { onMenu: () => void }) {
  return <header className="topbar">
    <div className="brand">
      <CollegeMark />
      <button className="mobile-menu" onClick={onMenu}>
        <Menu size={22} />
      </button>
      <GraduationCap size={25} fill="currentColor" />
      <strong>MVSR Engineering College</strong>
    </div>

    <div className="header-right">
      <div className="search">
        <span>Search...</span>
        <Search size={23} />
      </div>

      <button className="circle">
        <Mail size={19} />
      </button>

      <button className="circle">
        <Bell size={18} />
      </button>

      <img className="avatar" src={studentPhoto} />

      <div className="student-head">
        <strong>METHUKU ISHAAN</strong>
        <ChevronDown size={15} />
        <small>(2451-24-733-141 / CSE) / II YEAR IV SEM</small>
      </div>
    </div>
  </header>;
}
function Sidebar({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <aside className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="side-top">
        <button className="sidebar-menu-button" onClick={onToggle}>
          <Menu size={28} strokeWidth={2.5} />
        </button>

        <CollegeMark />
        <span>MVSR Engineering College</span>
      </div>

      <nav>
        <button
          className={`nav-item ${window.location.pathname === '/dashboard' ? 'active' : ''}`}
          onClick={() => go('/dashboard')}
        >
          <Home size={19} />
          <span>Home</span>
        </button>

        <button
          className={`nav-item ${window.location.pathname.includes('examination') ? 'active' : ''}`}
          onClick={() => go('/examination/results')}
        >
          <BookOpen size={18} />
          <span>Examination</span>
          <ChevronRight className="nav-arrow" size={17} />
        </button>
      </nav>
    </aside>
  );
}

function Breadcrumb({ results = false }: { results?: boolean }) {
  return <div className="breadcrumb"><Home size={17} fill="currentColor" /><ChevronRight size={16} />{results && <><span>Examination</span><ChevronRight size={16} /></>}<span>{results ? 'Exam Results' : 'Dashboard'}</span><Grid2X2 className="grid-icon" size={22} fill="currentColor" /></div>;
}

function Shell({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  return <div className="portal"><Header onMenu={() => setExpanded((value) => !value)} /><Sidebar expanded={expanded} onToggle={() => setExpanded((value) => !value)} /><main className="main-content">{children}</main><footer>Copyright © 2021 . All Rights Reserved</footer></div>;
}

function Panel({ title, className = '' }: { title: string; className?: string }) {
  return <section className={`dashboard-panel ${className}`}><h2>{title}</h2><div className="panel-body" /></section>;
}

function ProfileCard() {
  return <section className="profile-card"><img src={studentPhoto} /><h2>METHUKU ISHAAN</h2><p>2451-24-733-141</p><p>Bachelor of Engineering / 2025-2026 /</p><p>CSE / II YEAR IV SEM / C</p></section>;
}

function Dashboard() {
  return <Shell><Breadcrumb /><div className="dashboard-grid"><ProfileCard /><Panel title="Today Timetable" className="timetable" /><div className="right-panels"><Panel title="Upcoming Events" /><Panel title="Notifications" /></div></div></Shell>;
}

function LoginLogo() {
  return <svg className="login-logo" viewBox="0 0 180 180" role="img" aria-label="Matrusri Education Society logo">
    <defs><path id="logo-arc" d="M 24 89 A 66 66 0 0 1 156 89" /></defs>
    <text className="logo-arc-text"><textPath href="#logo-arc" startOffset="50%">MATRUSRI EDUCATION SOCIETY</textPath></text>
    <circle cx="90" cy="92" r="43" fill="#f7fbef" stroke="#b42d4d" strokeWidth="3" />
    <path d="M51 93 Q64 66 80 78 Q90 59 101 78 Q120 62 130 94 Q113 83 104 94 Q91 78 78 95 Q66 83 51 93Z" fill="#74b947" />
    <path d="M58 101 Q68 83 77 102 M70 108 Q82 86 90 109 M85 111 Q94 89 103 108 M101 106 Q111 86 121 102" fill="none" stroke="#319249" strokeWidth="4" strokeLinecap="round" />
    <path d="M83 105 L73 146 L89 130 L90 153 L101 130 L108 146 L98 105Z" fill="#710f35" />
    <path d="M67 155 H113" stroke="#b42d4d" strokeWidth="2" />
    <text x="90" y="166" textAnchor="middle" className="logo-year">ESTD-1980</text>
  </svg>;
}

function Login() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [submitted, setSubmitted] = useState(false); const [remember, setRemember] = useState(false); const [authError, setAuthError] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSubmitted(true); const validCredentials = email.trim() === '2451-24-733-141' && password === '2451-24-733-141'; setAuthError(!validCredentials); if (validCredentials) go('/dashboard'); };
  return <div className="login-page"><form className="login-card" onSubmit={submit}><LoginLogo /><h1>LOGIN</h1><label className={submitted && (!email || authError) ? 'invalid' : ''}><input value={email} onChange={(event) => { setEmail(event.target.value); setAuthError(false); }} placeholder="Email Or Username*" /><Mail size={23} fill="currentColor" /> </label>{submitted && !email && <span className="error">Email is required</span>}<label className={submitted && (!password || authError) ? 'invalid' : ''}><input type="password" value={password} onChange={(event) => { setPassword(event.target.value); setAuthError(false); }} placeholder="Password" /><KeyRound size={23} fill="currentColor" /></label>{submitted && !password && <span className="error">Password is required</span>}{authError && email && password && <span className="error">Invalid username or password</span>}<div className="login-options"><label className="remember"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> <span>Remember Me</span></label><a href="#forgot">Forgot Password?</a></div><a className="privacy" href="#privacy">Privacy Policy...</a><button className="login-button" type="submit">LOGIN</button></form></div>;
}

function ExamStudentInfo() {
  return <div className="exam-info"><img src={studentPhoto} /><div className="exam-student"><p>METHUKU ISHAAN <b>(REGULAR)</b></p><p>2451-24-733-141</p><p>MVSR / 2025-2026 / Bachelor of Engineering / CSE / II YEAR IV SEM / Section C</p><p>9346533463</p></div><div className="exam-meta"><p>Admission Date :</p><p>Quota : <a>A-CONVENOR</a></p><p>Student Status : <strong>IN COLLEGE</strong></p></div></div>;
}

function Results() {
  const [semester, setSemester] = useState<Semester>('I YEAR I SEM');
  const tabs = Object.keys(marks) as Semester[];
  return <Shell><Breadcrumb results /><section className="results-card"><div className="results-heading"><Computer size={29} /><span>Exam Results</span></div><ExamStudentInfo /><div className="marks-title">Semwise Final Marks</div><div className="marks-wrap"><div className="semester-tabs">{tabs.map((tab) => <button key={tab} className={tab === semester ? 'selected' : ''} onClick={() => setSemester(tab)}>{tab}</button>)}</div><div className="table-scroll"><table><thead><tr><th>Sl.No</th><th>Subject Code</th><th>Subject Name</th><th>Month Year</th><th>Final Grade</th><th>Credits</th><th>Status</th></tr></thead><tbody>
  {marks[semester].map((row) => (
    <tr key={row[0]}>
      {row.map((cell, index) => (
        <td key={`${row[0]}-${index}`}>{cell}</td>
      ))}
    </tr>
  ))}

  <tr className="result-summary">
    <td colSpan={4}></td>
    <td>SGPA : {semesterResults[semester].sgpa}</td>
    <td>CGPA : {semesterResults[semester].cgpa}</td>
    <td>RESULT : {semesterResults[semester].result}</td>
  </tr>
</tbody></table></div></div></section></Shell>;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  window.onpopstate = () => setPath(window.location.pathname);
  if (path === '/login' || path === '/') return <Login />;
  if (path === '/examination' || path === '/examination/results') return <Results />;
  return <Dashboard />;
}

export default App;
