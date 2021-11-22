export const PROGRAM_ADDRESS = "BKYnkCDDTEzYez4YhmgJsbFNPK6TWQL1uanVKsxFfzPA";

export type NbaGmWithFriendsPrograms = {
  version: "0.0.0";
  name: "nba_gm_with_friends_programs";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "baseAccount";
          isMut: true;
          isSigner: true;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "addPlayer";
      accounts: [
        {
          name: "baseAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "name";
          type: "string";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "baseAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "totalPlayers";
            type: "u64";
          },
          {
            name: "playerList";
            type: {
              vec: {
                defined: "ItemStruct";
              };
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "ItemStruct";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "userAddress";
            type: "publicKey";
          }
        ];
      };
    }
  ];
};

export const IDL: NbaGmWithFriendsPrograms = {
  version: "0.0.0",
  name: "nba_gm_with_friends_programs",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "baseAccount",
          isMut: true,
          isSigner: true,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "addPlayer",
      accounts: [
        {
          name: "baseAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "name",
          type: "string",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "baseAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "totalPlayers",
            type: "u64",
          },
          {
            name: "playerList",
            type: {
              vec: {
                defined: "ItemStruct",
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "ItemStruct",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "userAddress",
            type: "publicKey",
          },
        ],
      },
    },
  ],
};
