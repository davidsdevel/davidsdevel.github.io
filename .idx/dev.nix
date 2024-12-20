{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.corepack_20
    pkgs.openssl
  ];
  idx.extensions = [
    "Prisma.prisma"
  ];
  services = {
    postgres = {
      enable = true;
      enableTcp = true;
    };
  };
  idx.previews = {
  };
}
