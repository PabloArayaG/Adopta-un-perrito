import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
const tagColors = ['success', 'primary', 'danger', 'warning'];

return (
    <>
    <Header title="Adopta un perrito" />
    <div className="card-container"> 
    <MyCard
        image="https://images.pexels.com/photos/3930940/pexels-photo-3930940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Martin"
        subtitle="Encantador con una personalidad única y una apariencia inconfundible."
        tagText="Bulldog"
        tagColor={tagColors[0]}
    />
    <MyCard
        image="https://images.pexels.com/photos/1242419/pexels-photo-1242419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Dante"
        subtitle="Perro inteligente y protector con una apariencia imponente."
        tagText="Doberman"
        tagColor={tagColors[1]}
    />
    <MyCard
        image="https://images.pexels.com/photos/4936221/pexels-photo-4936221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Mateo"
        subtitle="Compañero elegante y enérgico con su distintivo pelaje blanco y negro. "
        tagText="Dalmata"
        tagColor={tagColors[2]}
    />
    <MyCard
        image="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Luci"
        subtitle="Leal y robusto con una mirada imponente y un corazón cariñoso."
        tagText="Rottweiler"
        tagColor={tagColors[3]}
    />
    </div>
    <Footer />
    {}
    </>
);
}

export default App;