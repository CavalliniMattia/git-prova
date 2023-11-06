import Logo from "../components/cavallini/Logo";
const PageCavallini = () => {
  return (
    <div>
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
