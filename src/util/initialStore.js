// sample data

export default {
  currentUserId: "sammy",
  users: [
    {
      id: "sammy",
      email: "sammy@bc.edu",
      photo:
        "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/sammy_profile.jpeg?v=1650136160687",
      name: "Sammy Lee",
      currentLessons: [
        {
          title: "BlockChain: Introduction",
          // number of quiz questions answered in this lesson
          progress: 1,
          id: "lesson1", // use as a key to distinguish from other keys
        },
        {
          title: "BlockChain: Security",
          progress: 0,
          id: "lesson2", // use as a key to distinguish from other keys
        },
        {
          title: "BlockChain: Applications",
          progress: 0,
          id: "lesson3", // use as a key to distinguish from other keys
        },
      ],
      points: 10,
      level: 1,
    },
    {
      id: "kyle",
      email: "kyle@bc.edu",
      photo:
        "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/kyle_profile.jpeg?v=1650136477074",
      name: "Kyle Viti",
      points: 10,
      level: 2,
    },
    {
      id: "minh",
      email: "minh@bc.edu",
      photo:
        "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/minh_profile.jpeg?v=1650136481413",
      name: "Minh Le",
      points: 10,
      level: 3,
    },
  ],
  // arrays of lesson object that contains quiz questions and answers
  lessons: [
    {
      // progess will just be the number of quiz questions answered
      title: "BlockChain: Introduction",
      id: "lesson1",
      progress: 0,
      // difficulty : hard / normal / easy
      difficulty: "normal",
      info: [
        {
          subtitle: "What is blockchain?",
          text: `In its purest form, a blockchain is a database: a place in which you can store data.
                 The vast majority of blockchains are used as ledgers to store financial transactions, but 
                 there is a plethora of potential applications that can be tapped into in the in the realm of blockchain.`,
          photo:
            "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/databaseimg.png?v=1650943050621", // url of the photo
        },
        {
          subtitle: "What sets blockchain apart?",
          text: `The main things that sets blockchain apart from other databases is its security, decentrality, 
                 and of course, the fact that the database is stored online in the form of a chain of blocks 
                 (hence the name). You might be wondering, "What ARE these blocks that everyone keeps talking about?".
                 No...they are not minecraft blocks. Blocks, in the context of blockchain,are basically groups of 
                 objects that store sets of data. We can delve a bit deeper in the next section.`,
          photo:
            "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/notminecraft.png?v=1650943926106",
        },
        {
          subtitle: "What are blocks and how do they work?",
          text: `Blocks (in the language of us computer scientists) are data structures. 
                 If you don’t know what that means, it doesn’t matter: 
                 all you need to know is that these blocks hold information inside them, the 
                 most common information being crypto-currency transactions.`,
          photo:
            "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/ledger.png?v=1650944919841", // url of the photo
        },
        {
          subtitle: "Visualizing Blocks",
          text: `Think of blocks as bottles of water: 
                 they are able to hold as much or as little information as you'd like, so long as you don't fill them past their overall capacity.
                 Similarly, blocks have a limited capacity, but they do not always have to be filled to the top.
                 Additionally, we want to be sure that the water being put into each bottle is clean -- and therefore usable.
                 The same thing goes for blocks in a blockchain!
                 The information going into each block must be clean and correct, according to the previous block.
                 If the information is good, then that block is verified and added to the blockchain..
                 `,
          photo:
            "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/lessonImage3.png?v=1650841712395", // url of the photo
        },
        {
          subtitle: "Summary",
          text: `In short, these blocks store transaction data that has not been validated by the 
                 network yet. Once these blocks are validated, they are permanently closed 
                 (part of the security and validity component) and then linked to the previously 
                 validated block. This forms the chain of data that is known as the blockchain.`,
          photo: "", // url of the photo
        },
      ],
      keyTerms:[
        {
          
        },
      ],
      quiz: [
        {
          question: "Why is blockchain called blockchain?",
          answerOptions: [
            {
              answerText: "It uses character strings that resembles a block",
              isCorrect: false,
            },
            { answerText: "It doesn't actually have blocks", isCorrect: false },
            {
              answerText:
                "It uses blocks of data that are decentralized and secure",
              isCorrect: true,
            },
            { answerText: "None of the Above", isCorrect: false },
          ],
        },
        {
          question:
            "What are the 3 characteristics that set blockchain apart from other databases and similar institutions?",
          answerOptions: [
            {
              answerText: "It is energy efficent, clean, and effective",
              isCorrect: false,
            },
            {
              answerText: "It is secure, decentralized, and virtual",
              isCorrect: true,
            },
            {
              answerText:
                "It is centralized, stable, and regulated by the government",
              isCorrect: false,
            },
            { answerText: "It is calm, cool, and collected", isCorrect: false },
          ],
        },
        {
          question: "What are blocks and what do they do?",
          answerOptions: [
            {
              answerText:
                "They are virtual bricks that build the wall known as blockchain",
              isCorrect: false,
            },
            {
              answerText:
                "Blocks are the currency that we use to make transactions over the blockchain",
              isCorrect: false,
            },
            {
              answerText:
                "Blocks are also known as the computers that are the nodes of the network",
              isCorrect: false,
            },
            {
              answerText:
                "They are data structures that record unverified transactions on the blockchain",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What happens to the blocks when they are verified?",
          answerOptions: [
            {
              answerText:
                "Verifiers, called miners, go back into the blocks and make sure the data is maintained",
              isCorrect: false,
            },
            {
              answerText:
                "The blocks are permanantly closed and linked the the previously validated block",
              isCorrect: true,
            },
            {
              answerText:
                "They are added to a queue where they stay miners mine the blocks",
              isCorrect: false,
            },
            {
              answerText:
                "They are permanantly deleted so that no hackers can tamper with them",
              isCorrect: false,
            },
          ],
        },
        // matching words
        // dragging blocks into chains
      ], // end of quiz
    },
    {
      // progess will just be the number of quiz questions answered
      title: "BlockChain: Security",
      id: "lesson2",
      progress: 0,
      // difficulty : hard / normal / easy
      difficulty: "medium",
      info: [
        {
          subtitle:"Intro",
          text: `Now that we have learned about the basic structure of a blockchain, we might 
          want to ask a question about why we might want to use blockchain, and what it brings 
          to the table.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/Frame%209.png?v=1651467312791", // url of the photo
        },
        {
          subtitle: "Is Blockchain Secure?",
          text: `When it comes to using blockchain one of the biggest rationales is 
          often its notoriety for being so secure. For starters, the structure of blockchains 
          was designed to be hackerproof. In a typical blockchain, blocks are linked in a linear 
          and chronological fashion so that once a block has been added to the end of the chain, 
          it is incredibly difficult to try to change the block or its contents.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/Frame%208.png?v=1651466695275", // url of the photo
        },
        {
          subtitle: "What are Nodes?",
          text: `One of the reasons for this comes from the fact that the blockchain is a distributed 
          network. The network runs on nodes. These nodes are basically devices that maintain the 
          latest state of the network and constantly verify and approve new transactions. These are 
          spread out across different networks at a variety of locations. `,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/Frame%205.png?v=1651466345014", // url of the photo
        },
        {
          subtitle:"Hacker!? 😱",
          text: `Suppose a hacker did try to tamper with information in a block. The hacker would 
          basically be altering one instance of the blockchain record. This would obviously not 
          work because once the nodes on the network cross-reference each other and realize that 
          the hackers record is inconsistent with what everyone else has, it will be cast out and 
          disregarded.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/Frame%205%20(2).png?v=1651460657118", // url of the photo
        },
        {
          subtitle:"Not Today Hacker!! 😎",
          text: `The only scenario in which a hacker would be able to successfully hack the network
          is if the hacker was able to control and at the same time alter over 50% of the nodes on
          the blockchain, so that their new version of the blockchain becomes the majority version.
          This feat is nearly impossible since this attempt to hack the network would require an 
          insurmountable amount of money and resources.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/Frame%207%20(1).png?v=1651461142750", // url of the photo
        },
        {
          subtitle:"Summary",
          text: `Blockchain technology is built in a fashion that makes it very hard for hackers to mess with.
          The fact that blockchain is built on various distributed nodes makes it hard for a hacker to target
          a single entity. Also, the biggger a blockchain grows, the more secure it becomes, making it even harder 
          for a bad actor to do damage.`,
          photo: "", // url of the photo
        }
        
      ],
      quiz: [
        {
          question: "How does the network know that a hacker tampered with the information on the blockchain ?",
          answerOptions: [
            {
              answerText: "The security system would know from the authentication of the user",
              isCorrect: false,
            },
            { answerText: "The nodes will be consistent with the rest of the nodes", isCorrect: false },
            {
              answerText:
                "The tampered node will be inconsistent with the rest of the nodes",
              isCorrect: true,
            },
            {
              answerText: "None of the above",
              isCorrect: false,
            },
          ],
        },
        {
          question: "Why is it so hard for hackers to successfully hack information in a blockchain ?",
          answerOptions: [
            { answerText: "The hacker would have to make multiple nodes to bypass the security system", isCorrect: false },
            {
              answerText: "It will require the processor to spawn multiple threads to access a single node",
              isCorrect: false,
            },
            {
              answerText: "The hacker would have to take control of more than half of the blockchain network",
              isCorrect: false,
            },
            {
              answerText: "All of the above",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Is it cost efficient to hack into a blockchain network ?",
          answerOptions: [
            {
              answerText:
                "Yes - the hacker just have to be careful about the security system",
              isCorrect: false,
            },
            {
              answerText:
                "No - the hacker will need to have a lot of resources / money to complete the attack. ",
              isCorrect: true,
            }
          ],
        },
        // matching words
        // dragging blocks into chains
      ], // end of quiz
    },
    {
      // progess will just be the number of quiz questions answered
      title: "BlockChain: Applications",
      progress: 0,
      id: "lesson3",
      // difficulty : hard / normal / easy
      difficulty: "medium",
      info: [
        {
          subtitle: "How can Blockchains be used?",
          text: `As mentioned in previous lessons, the potential of blockchain 
          stretches far and wide. It has potential in a myriad of sectors including: 
          banking, healthcare, property rights, smart contracts, and even the 
          food industry.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-6TeIOdNnMaM-unsplash.jpg?v=1651515031270", // url of the photo
        },
        {
          subtitle: "How might Companies use Blockchain?",
          text: `Some companies that already use blockchain in their operations include 
          Walmart, Pfzier, Siemens, and many more. IBM, for example, uses its Food Trust 
          blockchain to keep record of food products and the journey it takes to get
          to their locations. This helps to prevent outbreaks of E. coli, salmonella, 
          and other harmful substances that might end up contaminating your food. 
          Companies are able to use the food journey information to find the root cause 
          of the problem quickly and efficiently, saving many lives in the long run.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/Frame%2010.png?v=1651513615497", // url of the photo
        },
        {
          subtitle: "Financial Applications of Blockchain",
          text: `The typical and most common application of blockchain involves the 
          financial sector. Bitcoin, being the first revolutionary application of 
          blockchain in the financial sector proves to be a much cleaner solution 
          to native currencies and banking systems.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/undraw_Savings_re_eq4w%20(1)%201.png?v=1651513905372", // url of the photo
        },
        {
          subtitle: "Cryptocurrency vs Banks",
          text: `In terms of operation, since cryptocurrencies are built on the blockchain
          and spread across a network of computers they are completely self-sufficient and
          are able to operate  24/7, unlike your typical bank. Transactions are not subject 
          to human error as transactions are completely peer-to-peer with no third party middle
          man. Transactions are made much quicker and smoother, with transaction times ranging
          as low as a few seconds to a few hours  depending on which blockchain you use.
          Compared to going through a bank, this is much quicker as the bank can take up to 1-3
          business days to verify transactions.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-7RiWCmXBU4k-unsplash.jpg?v=1651515092717", // url of the photo
        },
        {
          subtitle: "Blockchain Currencies ",
          text: `Unlike the US dollar, crypto currencies like bitcoin are not controlled by any 
          single entity like the federal reserve in the US. Under a central system such as the 
          federal reserve, users' currency are subject to the actions of a central entity. For
          example, more money can be printed causing inflation, or if a user lives in a country
          with an unstable government, the value of their currency might be questionable.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-iLNPS0N_6J4-unsplash.jpg?v=1651515041811", // url of the photo
        },
        {
          subtitle: "Breaking Down Barriers",
          text: `Since blockchains are spread across a network of computers, and are not owned
          or controlled by a single entity like the government, blockchain technology allows 
          for crypto currencies to act as a global currency. This is especially helpful because 
          it provides a stable currency for countries with unstable currencies or unstable 
          financial institutions.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-iA577utr5N4-unsplash.jpg?v=1651515242776", // url of the photo
        },
        {
          subtitle: "Worldwide exchange",
          text: `In addition to providing a more stable currency, crypto currencies built on 
          the blockchain provide individuals and institutions with a wider range of entities 
          that they can do business with that is not limited by international borders or banks.`,
          photo: "https://cdn.glitch.global/e7a5defb-cc51-4040-b71e-98f05b4b383a/tezos-Yu-HIuvap1s-unsplash.jpg?v=1651515047848", // url of the photo
        },{
          subtitle: "Summary",
          text: `In summary, blockchain has many applications, one of the biggest being in the 
          financial industry. Crypto currency built on the blockchain provides an equitable
          solution for countries all around the world that have unstable currencies or financial
          institutions. Crypto Currencies does have its drawbacks, but it has immense potential 
          to solve and eliminate many problems in terms of a global economy.`,
          photo: "", // url of the photo
        },
      ],
      quiz: [
        {
          question: "Why is it important for companies like IBM and Walmart to use blockchain to track the sources of their food products ?",
          answerOptions: [
            {
              answerText: "Blockchain is a reliable way of storing the location and condition of food, which helps food industries to keep of safety and freshness of their products",
              isCorrect: false,
            },
            { answerText: "Blockchain allows companies to identify problems in their food product earlier in the process to avoid further contamination", isCorrect: false },
            {
              answerText: "Blockchain gives the ability to track the journey of the food from the start to end, providing huge transparency",
              isCorrect: false,
            },
            {
              answerText: "It contains a storage system of stacked blocks",
              isCorrect: true,
            },
          ],
        },
        {
          question: "Why is it better for banks to utilize blockchain technology for transaction processing ? ",
          answerOptions: [
            { answerText: "Transactions using blockchain actually take the same amount of time as the current system", 
             isCorrect: false 
            },
            {
              answerText: "Blockchain takes less time to process user transactions and fund exchange as it is as easy as adding a block to the chain",
              isCorrect: false,
            },
            {
              answerText: "Blockchain system also allow for less risks for the banks by reducing transaction time",
              isCorrect: false,
            },
            {
              answerText: "Both b and c",
              isCorrect: true,
            },
          ],
        },
        {
          question: "How is being “decentralized” beneficial for a currency ?",
          answerOptions: [
            {
              answerText:
                "No more transactions fees or financial risk",
              isCorrect: false,
            },
            {
              answerText:
                "Users have full control over their money",
              isCorrect: false,
            },
            {
              answerText:
                "Transactions can be made both domestically and internationally",
              isCorrect: false,
            },
            {
              answerText:
                "All of the above",
              isCorrect: true,
            },
          ],
        },
        // matching words
        // dragging blocks into chains
      ], // end of quiz
    },
  ],
};
