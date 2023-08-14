export interface pokemon {
  id: string | number;
  name: string;
  weight: number;
  height: number;
  sprites: {
    other: {
      versions: {
        'generation-v': {
          'black-white': {
            animated: {
              front_default: string;
            };
          };
        };
      };
    };
  };
  types: {
    type: {
      name: string;
      url: string;
    }[];
  };
}
