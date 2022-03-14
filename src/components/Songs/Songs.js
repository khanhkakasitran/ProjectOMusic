const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Sing me to sleep",
      artist: "Alan Walker",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
    },
    {
      id: 2,
      favourite: false,
      songName: "Fade-NCS Release",
      artist: "Alan Walker",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
    },
    {
      id: 3,
      favourite: false,
      songName: "She-NCS Release",
      artist: "Andromedik",
      song:"https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233",
    },
    {
      id: 4,
      favourite: false,
      songName: "About you-NCS Release",
      artist: "Ascence",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2",
    },
    {
      id: 5,
      favourite: false,
      songName: "On & On (feat. Daniel Levi) [NCS Release]",
      artist: "Cartoon",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
    },
    {
      id: 6,
      songName: "Castle [NCS Release]",
      artist: "Clarx & Harddope",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741580619284540/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    },
    {
      id: 7,
      favourite: false,
      songName: "Invincible [NCS Release]",
      artist: "DEAF KEV",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1",
    },
    {
      id: 8,
      favourite: false,
      songName: "Blank [NCS Release]",
      artist: "Disfigure",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741669588205598/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
       "https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a",
    },
    {
      id: 9,
      favourite: false,
      songName: "Nekozilla [NCS Release]",
      artist: "Different Heaven",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b27309065005b0fbfc4b320d05de",
    },
    {
      id: 10,
      favourite: false,
      songName: "Savannah (feat. Philly K) [NCS Release]",
      artist: "Diviners",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46",
    },
    {
      id: 11,
      favourite: false,
      songName: "Cloud 9 [NCS Release]",
      artist: "DItro & Tobu",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741836018974740/Itro___Tobu_-_Cloud_9_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273d6fd719531afda5f9cc0e248",
    },
    {
      id: 12,
      favourite: false,
      songName: "Sky High [NCS Release]",
      artist: "Elektronomia",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba",
    },
    {
      id: 13,
      favourite: false,
      songName: "Where'd You Go (feat. Luna Lark) [NCS Release]",
      artist: "Julius Dreisig",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf",
    },
    {
      id: 14,
      favourite: false,
      songName: "Island [NCS BEST OF]",
      artist: "Jarico",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741836840665158/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3",
      imgSrc:
       "https://i.scdn.co/image/ab67616d0000b273058c78826c35cbc3d03516c1",
    },
    {
      id: 15,
      favourite: false,
      songName: "Heroes Tonight (feat. Johnning) [NCS BEST OF]",
      artist: "Janji",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741837385793556/Janji_-_Heroes_Tonight_feat._Johnning_NCS_ReleaMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b2739b07b787123fe99fffc9c789",
    },
    {
      id: 16,
      favourite: false,
      songName: "Chasing Dreams [NCS Release]",
      artist: "Jim Yosef & Valentina Franco",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741840136994846/Jim_Yosef___Valentina_Franco_-_Chasing_Dreams_NCSMP3_160K.mp3",
      imgSrc:
       "https://i.scdn.co/image/ab67616d0000b273c14d955611b72addabd9163c",
    },
    {
      id: 17,
      favourite: false,
      songName: "Link [NCS Release]",
      artist: "Jim Yosef",
      song: "https://cdn.discordapp.com/attachments/775740994595323954/775741840224813096/Jim_Yosef_-_Link_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b2734f1608584777e92bddd5c904",
    },
    {
      id: 18,
      favourite: false,
      songName: "Symbolism [NCS Release]",
      artist: "Electro-Light",
      song:"https://cdn.discordapp.com/attachments/775740994595323954/775741841010065418/Electro-Light_-_Symbolism_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b273b44de5b9f5eba409dfa753e6",
    },
    {
      id: 19,
      favourite: false,
      songName: "Invisible [NCS Release]",
      artist: "Julius Dreisig & Zeus X Crona",
      song:"https://cdn.discordapp.com/attachments/775740994595323954/775741873582899230/Julius_Dreisig___Zeus_X_Crona_-_Invisible_NCS_RelMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b27391b709ced968e29e8f00dfe3",
    },
    {
      id: 20,
      favourite: false,
      songName: "Harpuia [NCS Release]",
      artist: "Kadenza ",
      song:"https://cdn.discordapp.com/attachments/775740994595323954/775741906344869928/Kadenza_-_Harpuia_NCS_ReleaseMP3_160K.mp3",
      imgSrc:
      "https://i.scdn.co/image/ab67616d0000b273cac40eaa1c17e52e45a8098f",
    },
  ];
  
  export { Songs };