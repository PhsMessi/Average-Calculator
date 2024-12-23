import { useState } from "react";

export default function App() {
  const [subjects, setSubject] = useState([]);
  const [calculate, setState] = useState(false);

  const updateState = () => {
    setState(true);
  };

  return (
    <div className="">
      <Navbar />
      <Main
        updateState={updateState}
        calculate={calculate}
        data={subjects}
        addSubject={setSubject}
      />
    </div>
  );
}

function Navbar() {
  return (
    <div className="sm:w-full p-3 bg-blue-600 text-center">
      <h1 className="text-white font-semibold">Average Calculator</h1>
    </div>
  );
}

function Main({ updateState, calculate, data, addSubject }) {
  const [addButton, setState] = useState(false);
  const [subjectName, setName] = useState("");
  const [grade, setGrade] = useState(null);

  const toggleState = () => {
    updateState();
  };

  const toggleAddSubject = () => {
    addSubject((prevSubject) => [
      ...prevSubject,
      { subject: subjectName, grade: Number(grade) },
    ]);
    setState(false);
    setName("");
    setGrade(null);
  };

  const calculateAverage = () => {
    if (data.length === 0) return 0;
    const total = data.reduce((acc, curr) => acc + curr.grade, 0);
    return (total / data.length).toFixed(2);
  };

  return (
    <div className="h-80 w-10/12 mx-auto">
      {calculate ? (
        <>
          {data.map((subject, index) => (
            <SubjectField
              key={index}
              name={subject.subject}
              grade={subject.grade}
            />
          ))}

          {addButton ? (
            <div>
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="border border-slate-500 p-1"
                  placeholder="Subject name"
                  value={subjectName}
                />
                <input
                  onChange={(e) => setGrade(e.target.value)}
                  className="border border-slate-500 p-1"
                  placeholder="Grade"
                  value={grade}
                />
              </div>

              <button
                onClick={() => toggleAddSubject()}
                className="mt-3 p-2 bg-blue-500 w-full text-white"
              >
                Add subject
              </button>
            </div>
          ) : (
            <button
              onClick={() => setState(true)}
              className="mt-3 p-2 bg-blue-500 w-full text-white"
            >
              New Subject
            </button>
          )}

          <div className="mt-5">
            <h2 className="text-lg font-semibold">Average Grade:</h2>
            <p className="text-xl">{calculateAverage()}</p>
          </div>
        </>
      ) : (
        <button
          onClick={() => toggleState()}
          className="mt-10 ml-12 p-2 px-5 bg-blue-500 text-white rounded-lg"
        >
          Calculate
        </button>
      )}
    </div>
  );
}

function SubjectField({ name, grade }) {
  return (
    <div className="flex my-3 justify-between">
      <input className="border border-slate-500 p-1" value={name} readOnly />
      <input
        className="border border-slate-500 w-1/4 p-1"
        value={grade}
        readOnly
      />
    </div>
  );
}
