# ⚛️ React All Hooks

A hands-on reference project covering all major React Hooks with focused, runnable examples. Built with **React 19** and **Vite** for a fast development experience.

---

## 🪝 Hooks Covered

Each hook has its own dedicated folder inside `hooks/` with isolated examples:

| Hook | Category | Purpose |
|---|---|---|
| `useState` | State | Manage local component state |
| `useReducer` | State | Handle complex state with actions |
| `useEffect` | Side Effects | Run side effects after render |
| `useLayoutEffect` | Side Effects | Run effects synchronously after DOM updates |
| `useRef` | Refs | Access DOM nodes or persist values without re-render |
| `useContext` | Context | Consume context without prop drilling |
| `useMemo` | Performance | Memoize expensive computed values |
| `useCallback` | Performance | Memoize callback functions for stable references |
| `useTransition` | Concurrent | Mark state updates as non-urgent for responsive UI |
| `useId` | Utility | Generate stable unique IDs for accessibility |
| `customHook` | Custom | Reusable logic built by composing built-in hooks |

---

## 🗂️ Project Structure

```
React_All_Hooks/
├── hooks/
│   ├── customHook/
│   ├── useCallback/
│   ├── useContext/
│   ├── useEffect/
│   ├── useId/
│   ├── useLayoutEffect/
│   ├── useMemo/
│   ├── useReducer/
│   ├── useRef/
│   ├── useState/
│   └── useTransition/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
git clone https://github.com/bisheshshrestha/React_All_Hooks.git
cd React_All_Hooks
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

```bash
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 🛠️ Tech Stack

- **React** 19
- **Vite** 7 with `@vitejs/plugin-react-swc`
- **ESLint** with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **JavaScript (JSX)**

---

## 📚 References

- [React Official Hooks Reference](https://react.dev/reference/react/hooks)
- [Vite Documentation](https://vite.dev)

---

## 👤 Author

**Bishesh Lal Shrestha**
[github.com/bisheshshrestha](https://github.com/bisheshshrestha)
