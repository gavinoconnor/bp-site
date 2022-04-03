const clientData = [
  {
    name: 'Diana Rilov',
    folder: 'Diana-Rilov',
    images: ['DR_01.png', 'DR_02.png', 'DR_03.png', 'DR_04.png'],
    id: 1
  },
  {
    name: 'iBuilt',
    folder: 'ibuilt',
    images: ['IB_01.png', 'IB_02.png', 'IB_03.png',],
    id: 2
  },
  {
    name: 'Berlin Rosen',
    folder: 'Berlin-Rosen',
    images: ['BR_01.png', 'BR_02.png', 'BR_03.png'],
    id: 3
  },
  {
    name: 'Anne Mülethaler',
    folder: 'Anne-Mulethaler',
    images: ['AVM_01.png', 'AVM_02.png'],
    id: 4
  },
  {
    name: 'Piermont Bank',
    folder: 'PiermontBank',
    images: ['PB_01.png', 'PB_02.png', 'PB_03.png', 'PB_04.png', 'PB_05.png'],
    id: 5
  },
  {
    name: 'Nikon',
    folder: 'Nikon',
    images: ['NK_01.png', 'NK_02.png', 'NK_03.png', 'NK_04.png', 'NK_05.png', 'NK_06.png', 'NK_07.png' ],
    id: 6
  },
    {
    name: 'School of Practical Philosophy',
    folder: 'School',
    images: ['SPP_01.png', 'SPP_02.png', 'SPP_03.png', 'SPP_04.png', 'SPP_05.png',],
    id: 7
  },
  {
    name: 'HBO',
    folder: 'HBO',
    images: ['HBO_01.png', 'HBO_02.png', 'HBO_03.png', 'HBO_04.png', 'HBO_05.png', 'HBO_06.png', 'HBO_07.png'],
    id: 8
  },
  {
    name: 'Delta',
    folder: 'Delta',
    images: ['DL_01.png', 'DL_02.png', 'DL_03.png'],
    id: 9
  },
  {
    name: 'eBay',
    folder: 'eBay',
    images: ['EB_01.png', 'EB_02.png', 'EB_03.png'],
    id: 10
  },
  {
    name: 'goop',
    folder: 'goop',
    images: ['GO_01.png', 'GO_02.png', 'GO_03.png', 'GO_04.png', 'GO_05.png'],
    id: 11
  },
  {
    name: 'Motif',
    folder: 'Motif',
    images: ['MO_01.png', 'MO_02.png', 'MO_03.png', 'MO_04.png'],
    id: 12
  },
  {
    name: 'FEED',
    folder: 'FEED',
    images: ['FD_01.png', 'FD_02.png', 'FD_03.png'],
    id: 13
  },
  {
    name: 'Two Sigma',
    folder: 'Two-Sigma',
    images: ['TS_01.png', 'TS_02.png', 'TS_03.png'],
    id: 14
  },
  {
    name: 'Over the Eight',
    folder: 'Over-the-Eight',
    images: ['OTE_01.png', 'OTE_02.png', 'OTE_03.png', 'OTE_04.png'],
    id: 15
  },
  {
    name: 'New Balance',
    folder: 'NewBalance',
    images: ['NB_01.png', 'NB_02.png', 'NB_03.png', 'NB_04.png', 'NB_05.png', 'NB_06.png'],
    id: 16
  },
  {
    name: 'WiVi',
    folder: 'WiVi',
    images: ['WV_01.png', 'WV_02.png'],
    id: 17
  },
  {
    name: 'TASTE',
    folder: 'TASTE',
    images: ['TA_01.png', 'TA_02.png', 'TA_03.png'],
    id: 18
  },
  {
    name: 'Origins School',
    folder: 'Origins-School',
    images: ['OR_01.png', 'OR_02.png', 'OR_03.png'],
    id: 19
  },
  {
    name: 'Third Rail Coffee',
    folder: 'Third-Rail-Coffee',
    images: ['TR_01.png', 'TR_02.png', 'TR_03.png'],
    id: 20
  },
  {
    name: 'The Green Building',
    folder: 'The-Green-Building',
    images: ['GB_01.png', 'GB_02.png'],
    id: 21
  },
  {
    name: 'Moinian',
    folder: 'Moinian',
    images: ['MO_01.png'],
    id: 22
  },
  {
    name: 'White House Farm',
    folder: 'White-House-Farm',
    images: ['WHO_01.png', 'WHO_02.png', 'WHO_03.png', 'WHO_04.png'],
    id: 23
  },
  {
    name: 'Wise Guitars',
    folder: 'Wise-Guitars',
    images: ['WG_01.png', 'WG_02.png'],
    id: 24
  },
  {
    name: 'Chronic Youth',
    folder: 'Chronic-Youth',
    images: ['CY_02.png', 'CY_01.png'],
    id: 25
  },
  {
    name: 'Freedom of the Press',
    folder: 'Freedom-of-the-Press',
    images: ['FOP_01.png', 'FOP_02.png', 'FOP_03.png', 'FOP_04.png', 'FOP_05.png', 'FOP_06.png', 'FOP_07.png', 'FOP_08.png', 'FOP_09.png', 'FOP_10.png', 'FOP_11.png', 'FOP_12.png', 'FOP_13.png', 'FOP_14.png',],
    id: 26
  },
  {
    name: 'Landfill zine',
    folder: 'Landfill',
    images: ['LF_01.png', 'LF_02.png', 'LF_03.png', 'LF_04.png', 'LF_05.png', 'LF_06.png', 'LF_07.png', 'LF_08.png', 'LF_09.png', 'LF_10.png', 'LF_11.png', 'LF_12.png', 'LF_13.png'],
    id: 27
  },
  {
    name: 'A Return To Mother\'s Love',
    folder: 'RTML',
    images: ['RTML_01.png', 'RTML_02.png', 'RTML_03.png', 'RTML_04.png', 'RTML_05.png', 'RTML_06.png', 'RTML_07.png', 'RTML_08.png', 'RTML_09.png', 'RTML_10.png', 'RTML_11.png', 'RTML_12.png', 'RTML_14.png', 'RTML_15.png', 'RTML_16.png', 'RTML_18.png', 'RTML_19.png', 'RTML_20.png', 'RTML_21.png', 'RTML_22.png'],
    id: 28
  },
  // {
  //   name: 'Nov York',
  //   folder: 'Nov-York',
  //   images: ['BLM_01.png'],
  //   id: 29
  // },
  {
    name: 'Indypendent',
    folder: 'Indypendent',
    images: ['INDY_01.png', 'INDY_02.png', 'INDY_03.png'],
    id: 30
  },
  {
    name: '1968xoxoxoxo',
    folder: '1968',
    images: ['68_01.jpg', '68_02.png', '68_03.png', '68_04.png', '68_05.png', '68_06.png', '68_07.png', '68_08.png', '68_09.png', '68_10.png'],
    id: 31
  },
  {
    name: 'I Love NY',
    folder: 'I-Love-NY',
    images: ['iny_01.jpg'],
    id: 32
  },
]

export default clientData;
