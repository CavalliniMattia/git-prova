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
      <p>salumi misti con gnocco fritto</p>
      <p>tortellini in brodo</p>
      <p>tagliata di manzo</p>
      <p>tartufo dolce</p>
      <p>
        Ci ritoviamo con molti commit, come si può fare per unirli in un unico
        commit? soluzione: eseguo un "git rebase -i 700ac45" che sarebbe lo
        stage prima delle varie commit, ci apre l'editor in cui sostituisco
        tutti i "pick" tranne il primo con "s" o "squash" e aggiungo un commento
        per l'unione delle commit
      </p>
    </div>
  );
};

export default PageCavallini;
