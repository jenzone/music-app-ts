import prisma from "@/lib/prisma";
import { validateRoute } from "@/lib/auth";

export default validateRoute(async (req: any, res: any, user: any) => {
  const playlists = await prisma.playlist.findMany({
    where: { userId: user.id },
    orderBy: {
      name: "asc",
    },
  });

  res.json(playlists);
});
