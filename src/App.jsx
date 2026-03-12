import TimerBack from "./components/TimerBack/TimerBack";

function App() {
  return (
    <>
      <TimerBack title="New Year" dataStr="2027-01-01" />
      <TimerBack title="Tommorow" dataStr="2026-03-13" />
      <TimerBack title="Tommorow" dataStr="2026-03-12 09:16:20" />
    </>
  );
}

export default App;
