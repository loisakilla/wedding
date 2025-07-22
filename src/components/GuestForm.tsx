import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/guestform.css';

const alcoholOptions = ['Вино', 'Шампанское', 'Виски', 'Водка', 'Без алкоголя'];

const GuestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('да');
  const [plusOne, setPlusOne] = useState('');
  const [alcohol, setAlcohol] = useState<string[]>([]);
  const [allergy, setAllergy] = useState('');

  const toggleAlcohol = (drink: string) => {
    setAlcohol(prev =>
      prev.includes(drink) ? prev.filter(d => d !== drink) : [...prev, drink]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body =
      `ФИО гостя: ${name}\n` +
      `Будет ли присутствовать: ${attendance}\n` +
      `Кто +1: ${plusOne}\n` +
      `Алкоголь: ${alcohol.join(', ')}\n` +
      `Аллергии: ${allergy}`;

    window.location.href =
      `mailto:kataeffg@yandex.ru?subject=Анкета%20гостя&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.section
      id="guest-form"
      className="guest-form"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2>Анкета гостя</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ФИО"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <label className="select-wrapper">
          <span>Будете присутствовать?</span>
          <select value={attendance} onChange={e => setAttendance(e.target.value)}>
            <option value="да">Да</option>
            <option value="нет">Нет</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Кого берете с собой"
          value={plusOne}
          onChange={e => setPlusOne(e.target.value)}
        />
        <div className="alcohol">
          {alcoholOptions.map(opt => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={alcohol.includes(opt)}
                onChange={() => toggleAlcohol(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
        <textarea
          placeholder="Аллергии"
          value={allergy}
          onChange={e => setAllergy(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
    </motion.section>
  );
};

export default GuestForm;
