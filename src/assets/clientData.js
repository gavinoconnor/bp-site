const clientData = [
  {
    name: 'Diana Rilov',
    folder: 'Diana-Rilov',
    images: ['DIANA_01.png'],
    id: 1
  },
  {
    name: 'Berlin Rosen',
    folder: 'Berlin-Rosen',
    images: ['BerlinRosen_01.png', 'BerlinRosen_01_Logo.png', 'BerlinRosen_02_Website.png', 'BerlinRosen_03_Grid.png'],
    id: 2
  },
  {
    name: 'Anne Mülethaler',
    folder: 'Anne-Mulethaler',
    images: ['AVM_01.png'],
    id: 3
  },
  {
    name: 'Piermont Bank',
    folder: 'PiermontBank',
    images: ['Piermont_01.png'],
    id: 4
  },
  {
    name: 'Nikon',
    folder: 'Nikon',
    images: ['Nikon_02_Signage.jpg', 'Nikon_01_Graphics.png', 'Nikon_03_Refract.JPG', 'Nikon_04_Space.jpg', 'Nikon_05_Program.jpg' ],
    id: 5
  },
  {
    name: 'eBay',
    folder: 'eBay',
    images: ['eBay_01.png', 'ebay_01_storedesign.png', 'ebay_02_kitofparts.png', 'ebay_03_UI.png'],
    id: 6
  },
  {
    name: 'HBO',
    folder: 'HBO',
    images: ['HBO_01.jpg', 'HBO_02.png', 'HBO_03.png', 'HBO_04.png', 'HBO_05.jpg', 'HBO_06.jpg', 'HBO_07.jpg'],
    id: 7
  },
  {
    name: 'Delta',
    folder: 'Delta',
    images: ['Delta_01_Stage.jpg', 'Delta_02_Program.jpg', 'Delta_03_People.jpg'],
    id: 8
  },
  {
    name: 'Start With Why',
    folder: 'Start-With-Why',
    images: ['SWW_03.png', 'SWW_01.png', 'SWW_02.png', 'SWW_04.png', 'SWW_05.png'],
    id: 9
  },
  {
    name: 'goop',
    folder: 'goop',
    images: ['goop_01.png', 'goop_02.jpg', 'goop_03.png', 'goop_04.jpg', 'goop_05.jpg', 'goop_06.png'],
    id: 10
  },
  {
    name: 'Motif',
    folder: 'Motif',
    images: ['Motif_01.png'],
    id: 11
  },
  // {
  //   name: 'New York Life',
  //   folder: 'New-York-Life',
  //   images: [],
  //   id: 12
  // },
  {
    name: 'FEED',
    folder: 'FEED',
    images: ['FEED.png', 'FEED_01.png', 'FEED_02.png', 'FEED_03.png'],
    id: 13
  },
  {
    name: 'Two Sigma',
    folder: 'Two-Sigma',
    images: ['TS_01.png', 'TS_01.jpeg', 'TS_03.jpeg', 'TS_03.png', 'TS_04.mp4'],
    id: 14
  },
  {
    name: 'Over the Eight',
    folder: 'Over-the-Eight',
    images: ['OTE_02_Menu.jpg'],
    id: 15
  },
  {
    name: 'LoveLive',
    folder: 'LoveLive',
    images: ['LoveLive_01.jpg', 'LoveLive_corporateID.png', 'LoveLive_web.png'],
    id: 16
  },
  {
    name: 'Third Rail Coffee',
    folder: 'Third-Rail-Coffee',
    images: ['TR_01.png'],
    id: 17
  },
  {
    name: 'UEG',
    folder: 'UEG',
    images: ['UEG_01.png', 'BrianPonto_Samples_2020_Page_19.png'],
    id: 18
  },
  {
    name: 'Origins School',
    folder: 'Origins-School',
    images: ['Origins_single.png', 'Origins_01.png', 'Origins_02.png', 'Origins_03.png'],
    id: 19
  },
  {
    name: 'BCG',
    folder: 'BCG',
    images: ['BCG_01.png'],
    id: 20
  },
  {
    name: 'White House Farm',
    folder: 'White-House-Farm',
    images: ['Whofarm_02.png', 'WHOfarm_01.jpg', 'WHOfarm_03.jpg'],
    id: 21
  },
  {
    name: 'the Green Building',
    folder: 'The-Green-Building',
    images: ['GreenBuilding_01.png', 'GreenBuilding_02.png'],
    id: 22
  },
  // {
  //   name: 'CHA CHA\'s House',
  //   folder: 'CHA-CHAs-House',
  //   images: [],
  //   id: 23
  // },
  // {
  //   name: 'UNILEVER',
  //   folder: 'UNILEVER',
  //   images: [],
  //   id: 24
  // },
  {
    name: 'Wise Guitar',
    folder: 'Wise-Guitar',
    images: ['WISE_Headstock.jpg'],
    id: 25
  },
  {
    name: 'Moinian',
    folder: 'Moinian',
    images: ['Moinian_02_Lobby.png','Moinian_01_Logo.png'],
    id: 26
  },
  {
    name: 'TASTE',
    folder: 'TASTE',
    images: ['TASTE_01.jpg', 'TASTE_02.jpg', 'TASTE_03.jpg'],
    id: 27
  },
  {
    name: 'Chronic Youth',
    folder: 'Chronic-Youth',
    images: ['CY_02.png', 'CY_01.png'],
    id: 28
  },
  {
    name: '1968xoxoxoxo',
    folder: '1968',
    images: ['68_01.jpg'],
    id: 29
  },
  {
    name: 'A Return To Mother\'s Love',
    folder: 'RTML',
    images: ['RTML_01.png'],
    id: 30
  },
  {
    name: 'Black Lives Matter',
    folder: 'BLM',
    images: ['BLM_01.png'],
    id: 31
  },
  {
    name: 'Freedom of the Press',
    folder: 'Freedom-of-the-Press',
    images: ['FOP_01.jpg'],
    id: 32
  },
  {
    name: 'I Love NY',
    folder: 'I-Love-NY',
    images: ['iny_01.jpg'],
    id: 33
  },
  {
    name: 'Indypendent',
    folder: 'Indypendent',
    images: ['INDY_01.png'],
    id: 34
  },
  {
    name: 'Landfill',
    folder: 'Landfill',
    images: ['LANDFILL_01.png'],
    id: 35
  },
  {
    name: 'New Balance',
    folder: 'NewBalance',
    images: ['NB_01.png'],
    id: 36
  }
]

export default clientData;
