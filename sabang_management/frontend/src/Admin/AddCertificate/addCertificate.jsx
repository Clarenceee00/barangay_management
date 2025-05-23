import { useState } from 'react';
import Sidebar from '../COM/Sidevar/Sidebar';

function AddCertificateModule() {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState({ title: '' });
  const [fieldInput, setFieldInput] = useState({ label: '', type: 'text' });
  const [fields, setFields] = useState([]);
  const [responses, setResponses] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFieldChange = (e) => {
    setFieldInput({ ...fieldInput, [e.target.name]: e.target.value });
  };

  const addField = () => {
    if (fieldInput.label.trim()) {
      setFields([...fields, fieldInput]);
      setFieldInput({ label: '', type: 'text' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return;

    const newCert = {
      ...form,
      fields,
    };

    setCertificates([...certificates, newCert]);
    setForm({ title: '' });
    setFields([]);
  };

  const handleResponseChange = (e, certTitle, fieldLabel) => {
    setResponses({
      ...responses,
      [certTitle]: {
        ...responses[certTitle],
        [fieldLabel]: e.target.value,
      },
    });
  };

  const handleFileChange = (e, certTitle) => {
    const file = e.target.files[0];
    setResponses({
      ...responses,
      [certTitle]: {
        ...responses[certTitle],
        validID: file,
      },
    });
  };

  const handleUserSubmit = (certTitle) => {
    const data = responses[certTitle];
    alert(`Submitted for "${certTitle}":\n` + JSON.stringify(
      {
        ...data,
        validID: data?.validID?.name || "No file uploaded"
      }, null, 2));
  };

  return (
    <>
      <style>{`
        .module-container {
          max-width: 900px;
          margin: 40px auto;
          background: #fff;
          border: 2px solid #ccc;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          padding: 30px 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .module-container h1 {
          font-size: 2.2rem;
          color: #1e40af;
          margin-bottom: 25px;
        }

        .module-container h3 {
          font-size: 1.7rem;
          color: #374151;
          margin-bottom: 20px;
        }

        .module-container h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2563eb;
          margin-bottom: 8px;
        }

        form {
          margin-bottom: 35px;
        }

        form input[type="text"],
        form input[type="number"],
        form input[type="date"],
        form input[type="file"],
        form select {
          width: 100%;
          padding: 12px 15px;
          margin-top: 8px;
          margin-bottom: 15px;
          border: 1.5px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.2s ease-in-out;
          box-sizing: border-box;
        }

        form input[type="text"]:focus,
        form input[type="number"]:focus,
        form input[type="date"]:focus,
        form input[type="file"]:focus,
        form select:focus {
          border-color: #2563eb;
          outline: none;
        }

        button {
          background-color: #2563eb;
          color: white;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #1e40af;
        }

        .add-field-btn {
          background-color: #16a34a;
          padding: 12px 20px;
        }

        .add-field-btn:hover {
          background-color: #15803d;
        }

        .flex-row {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .flex-row input[type="text"],
        .flex-row select {
          flex: 1;
          margin-bottom: 0;
        }

        .user-form {
          background: #f9fafb;
          border: 1.5px solid #d1d5db;
          border-radius: 12px;
          padding: 20px 25px;
          margin-bottom: 30px;
        }

        label.file-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #4b5563;
          margin-bottom: 6px;
          display: block;
        }

        .fields-list {
          font-size: 0.85rem;
          color: #6b7280;
          margin-top: -10px;
          margin-bottom: 15px;
        }
      `}</style>

      <div className="module-container">
        <Sidebar />
        <h1>Create Certificate Form</h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            name="title"
            placeholder="Certificate Title"
            value={form.title}
            onChange={handleChange}
          />

          <div className="flex-row">
            <input
              type="text"
              name="label"
              placeholder="Field Label (e.g. Full Name)"
              value={fieldInput.label}
              onChange={handleFieldChange}
            />
            <select
              name="type"
              value={fieldInput.type}
              onChange={handleFieldChange}
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
            </select>
            <button type="button" onClick={addField} className="add-field-btn">
              + Add Field
            </button>
          </div>

          <div className="fields-list">
            Fields: {fields.length > 0 ? fields.map(f => f.label).join(', ') : 'None'}
          </div>

          <button type="submit">Save Certificate Form</button>
        </form>

        <h3>Available Forms for Users</h3>

        {certificates.map((cert, index) => (
          <div key={index} className="user-form">
            <h4>{cert.title}</h4>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleUserSubmit(cert.title);
              }}
            >
              {cert.fields.map((field, i) => (
                <input
                  key={i}
                  type={field.type}
                  placeholder={field.label}
                  value={responses[cert.title]?.[field.label] || ''}
                  onChange={(e) => handleResponseChange(e, cert.title, field.label)}
                  required
                />
              ))}

              <label className="file-label" htmlFor={`validID-${index}`}>
                Upload Valid ID
              </label>
              <input
                id={`validID-${index}`}
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => handleFileChange(e, cert.title)}
                required
              />

              <button type="submit">Submit Form</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddCertificateModule;
