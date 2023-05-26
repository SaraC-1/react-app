import { useState } from "react";

type CharacterType = {
  id: number;
  name: string;
  img: string;
  name2: string;
  img2: string;
  synopsis: string;
};

const Anime = () => {
  const [activeCharacter, setActiveCharacter] = useState<CharacterType | null>(
    null
  );
  const animeCharacters: CharacterType[] = [
    {
      id: 1,
      name: "Lelouch Lamperouge",
      img: "https://cdn.myanimelist.net/images/characters/8/406163.jpg",
      name2: "Code Geass",
      img2: "https://cdn.myanimelist.net/images/anime/1032/135088.jpg",
      synopsis:
        "In the year 2010, the Holy Empire of Britannia is establishing itself as a dominant military nation, starting with the conquest of Japan. Renamed to Area 11 after its swift defeat, Japan has seen significant resistance against these tyrants in an attempt to regain independence. Lelouch Lamperouge, a Britannian student, unfortunately finds himself caught in a crossfire between the Britannian and the Area 11 rebel armed forces. He is able to escape, however, thanks to the timely appearance of a mysterious girl named C.C., who bestows upon him Geass, the Power of Kings. Realizing the vast potential of his newfound power of absolute obedience, Lelouch embarks upon a perilous journey as the masked vigilante known as Zero, leading a merciless onslaught against Britannia in order to get revenge once and for all.",
    },
    {
      id: 2,
      name: "Johan Liebheart",
      img: "https://cdn.myanimelist.net/images/characters/4/316522.jpg",
      name2: "Monster",
      img2: "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
      synopsis:
        "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.",
    },
    {
      id: 3,
      name: "Aika Fuwa",
      img: "https://cdn.myanimelist.net/images/characters/13/281739.jpg",
      name2: "Zetsuen no Tempest",
      img2: "https://cdn.myanimelist.net/images/anime/7/42453.jpg",
      synopsis:
        "Yoshino Takigawa, an ordinary teenager, is secretly dating his best friend Mahiro Fuwa's younger sister, Aika. But when Aika mysteriously dies, Mahiro disappears, vowing to find the one responsible and make them pay for murdering his beloved sister. Yoshino continues his life as usual and has not heard from Mahiro in a month—until he is confronted by a strange girl who holds him at gunpoint, and his best friend arrives in the nick of time to save him.",
    },
    {
      id: 4,
      name: "Saki Watanabe",
      img: "https://cdn.myanimelist.net/images/characters/10/298471.jpg?_gl=1*9k21cp*_ga*MTM2Njg2NDQyMy4xNjg1MTI0ODYz*_ga_26FEP9527K*MTY4NTEyNDg2Ny4xLjAuMTY4NTEyNDg3NC41My4wLjA.",
      name2: "Shinsekai yori",
      img2: "https://cdn.myanimelist.net/images/anime/8/41993.jpg",
      synopsis:
        "In the town of Kamisu 66, 12-year-old Saki Watanabe has just awakened to her psychic powers and is relieved to rejoin her friends—the mischievous Satoru Asahina, the shy Mamoru Itou, the cheerful Maria Akizuki, and Shun Aonuma, a mysterious boy whom Saki admires—at Sage Academy, a special school for psychics. However, unease looms as Saki begins to question the fate of those unable to awaken to their powers, and the children begin to get involved with secretive matters such as the rumored Tainted Cats said to abduct children.",
    },
    {
      id: 5,
      name: "L-elf Karlstein",
      img: "https://cdn.myanimelist.net/images/characters/5/202055.jpg",
      name2: "Kakumeiki Valvrave",
      img2: "https://cdn.myanimelist.net/images/anime/3/49251.jpg",
      synopsis:
        "In the 71st year of the True Era, humans have successfully expanded into space and have started living in independent galactic colonies. The world itself is split between two major nations: the Atlantic Rim United States (ARUS) and the Dorssia Military Pact Federation (Dorssia)—superpowers that wage war against each other on Earth and far into outer space. In this war-torn era, a third faction comprised of Japan and Islands of the Oceanian Republic (JIOR), reside peacefully and prosper economically, maintaining neutrality between themselves and their militant neighbors.",
    },
    {
      id: 6,
      name: "Yona",
      img: "https://cdn.myanimelist.net/images/characters/13/325018.jpg",
      name2: "Akatsuki no Yona",
      img2: "https://cdn.myanimelist.net/images/anime/9/64225.jpg",
      synopsis:
        "Yona's perfect world comes crashing down when a heinous act of treason threatens to erase all that she holds dear, including her birthright as the princess of Kouka. Left with no one to trust but her childhood friend and loyal bodyguard Son Hak, she is forced to flee the palace. Faced with the perils of surviving in the wild with a target on her back, Yona realizes that her kingdom is no longer the safe haven it once was. Free from the shackles of naivety, Yona vows to do everything in her power to become strong enough to crush her enemies. With Hak by her side, she must piece together the remains of an ancient legend that might be the key to reclaiming her kingdom from those who conspired to steal it from her.",
    },
  ];

  const getActiveCharacter = (id: number) => {
    animeCharacters.forEach((value) => {
      if (value.id === id) {
        setActiveCharacter(value);
      }
    });
  };

  return (
    <div className="container">
      <h1 className="animeh1">Best Anime Characters of All Time</h1>
      <h2 className="animeh2">(Not At All Subjective Opinion!)</h2>
      <p>
        Click on the picture of the character to find out what anime they're
        from.
      </p>
      <div className="cardlist">
        {animeCharacters.map((character) => {
          return (
            <div>
              <div className="cardlist__item">
                <img
                  src={character.img}
                  alt=""
                  onClick={() => getActiveCharacter(character.id)}
                />
                <p>{character.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Anime;
