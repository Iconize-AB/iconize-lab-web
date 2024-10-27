import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InteractiveFormSection.scss';

function InteraktivtFormulärSektion() {
  const [formulärData, setFormulärData] = useState({
    namn: '',
    epost: '',
    företag: '',
    tjänster: [],
    meddelande: ''
  });

  const hanteraÄndring = (e) => {
    const { name, value } = e.target;
    setFormulärData(föregåendeTillstånd => ({
      ...föregåendeTillstånd,
      [name]: value
    }));
  };

  const hanteraTjänstÄndring = (tjänst) => {
    setFormulärData(föregåendeTillstånd => ({
      ...föregåendeTillstånd,
      tjänster: föregåendeTillstånd.tjänster.includes(tjänst)
        ? föregåendeTillstånd.tjänster.filter(t => t !== tjänst)
        : [...föregåendeTillstånd.tjänster, tjänst]
    }));
  };

  const hanteraInlämning = async (e) => {
    e.preventDefault();
    try {
      const svar = await fetch('https://formspree.io/f/mvgogrno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formulärData)
      });

      if (svar.ok) {
        toast.success('Tack för din inlämning!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setFormulärData({
          namn: '',
          epost: '',
          företag: '',
          tjänster: [],
          meddelande: ''
        });
      } else {
        throw new Error('Formulärinlämningen misslyckades');
      }
    } catch (fel) {
      console.error('Fel:', fel);
      toast.error('Det uppstod ett fel vid inlämning av formuläret. Vänligen försök igen.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const tjänster = [
    'Magento-utveckling',
    'Saleor-utveckling',
    'WooCommerce-utveckling',
    'App-utveckling',
    'Web-utveckling',
    'Kopiering',
    'Marknadsföring'
  ];

  return (
    <section className="interactive-form-section">
      <ToastContainer />
      <div className="form-container">
        <h2>Hur kan vi hjälpa dig att växa?</h2>
        <p>Berätta mer om det ni vill åstadkomma så svarar vi så snart vi kan.</p>
        <form onSubmit={hanteraInlämning}>
          <div className="form-group">
            <label htmlFor="namn">Namn*</label>
            <input
              type="text"
              id="namn"
              name="namn"
              value={formulärData.namn}
              onChange={hanteraÄndring}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="epost">E-post*</label>
            <input
              type="email"
              id="epost"
              name="epost"
              value={formulärData.epost}
              onChange={hanteraÄndring}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="företag">Företag</label>
            <input
              type="text"
              id="företag"
              name="företag"
              value={formulärData.företag}
              onChange={hanteraÄndring}
            />
          </div>
          <div className="form-group">
            <label>Tjänster du är intresserad av:</label>
            <div className="services-checkboxes">
              {tjänster.map((tjänst) => (
                <label key={tjänst} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="tjänster"
                    value={tjänst}
                    checked={formulärData.tjänster.includes(tjänst)}
                    onChange={() => hanteraTjänstÄndring(tjänst)}
                  />
                  <span>{tjänst}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="meddelande">Berätta mer om ditt projekt:</label>
            <textarea
              id="meddelande"
              name="meddelande"
              value={formulärData.meddelande}
              onChange={hanteraÄndring}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Kontakta oss</button>
        </form>
      </div>
    </section>
  );
}

export default InteraktivtFormulärSektion;
