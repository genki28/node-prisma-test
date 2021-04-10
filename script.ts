import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // 何かqueryを放つ
  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)
  const allUsers = await prisma.user.findMany({
    include: { posts: true }
  })

  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect
  })