import Logo from "../components/cavallini/Logo";
const PageCavallini = () => {
  return (
    <div>
      <h1>Mattia Cavallini</h1>
      <p>
        la mia branch dedicata è indietro di qualche commit rispetto a master,
        come faccio a portarla avanti? Cioè, come faccio a portare le modifiche
        fatte su master sulla mia branch dedicata? soluzione: faccio un "git
        merge master" così da apportare le modifiche fatte a master sulla mia
        branch di adesso cavallini-init
      <Logo />
      <p>
        dopo aver creato una nuova branch master-copia, ho eseguito un "git
        reset 6d4dc95" nella master per tornare alla versione dopo il merge,
        quindi pulita senza modifiche al file pageCavallini e senza la creazione
        del file Logo.tsx
      </p>
    </div>
  );
};

export default PageCavallini;
