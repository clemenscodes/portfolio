{
  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs/nixos-unstable";
    };
  };
  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
  in {
    devShell = {
      ${system} = pkgs.mkShell {
        buildInputs = [
          pkgs.bun
          pkgs.nodejs
          pkgs.python3
        ];
      };
    };
  };
}
