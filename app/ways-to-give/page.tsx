import Link from "next/link";
import { CreditCard, TicketCheck, TicketMinus, HeartHandshake } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="p-8 mx-auto max-w-screen-lg">
      <section className="grid grid-col-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-8">
        <article>
          <Card className="md:h-[316px]">
            <CardHeader>
              <CardTitle>
                <CreditCard />
              </CardTitle>
              <CardDescription>
                Donate Securely using Mobile money or Bank Card
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                You can donate directly on this website using Mobile Money from
                any network or using your Bank Card
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/donate"
                className="underline text-blue-400 hover:text-blue-700"
              >
                Click here to donate
              </Link>
            </CardFooter>
          </Card>
        </article>
        <article>
          <Card>
            <CardHeader>
              <CardTitle>
                <TicketCheck />
              </CardTitle>
              <CardDescription>Donate by Bank Transfer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
              Your generosity can make significant impact on the lives that are in need. Kindly make a contribution via bank transfer to the foundations account and be a part of change.
              </p>
            </CardContent>
            <CardFooter>
              <span>
                VheeWorld Foundation<br/>Acc no : 1441002243983<br/>Ecobank spintex
                branch
              </span>
            </CardFooter>
          </Card>
        </article>
        <article>
          <Card>
            <CardHeader>
              <CardTitle><TicketMinus /></CardTitle>
              <CardDescription>Donate by Cheque</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">To make a contribution via cheques, contact the foundation on <Link href="mailto:vheeworld@gmail.com" className="underline text-blue-400 hover:text-blue-700">vheeworld@gmail.com</Link> and <Link href="tel:+233209334967" className="underline text-blue-400 hover:text-blue-700">+233 20 933 4967</Link> for further assistance. </p>
            </CardContent>
            <CardFooter>
            <span>
                VheeWorld Foundation<br/>Acc no : 1441002243983<br/>Ecobank spintex
                branch
              </span>
            </CardFooter>
          </Card>
        </article>
        <article>
          <Card className="h-[292px]">
            <CardHeader>
              <CardTitle><HeartHandshake /></CardTitle>
              <CardDescription>Donating in Kind</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">To make a contribution in kind contact the foundation on <Link href="mailto:vheeworld@gmail.com" className="underline text-blue-400 hover:text-blue-700">vheeworld@gmail.com</Link> and <Link href="tel:+233209334967" className="underline text-blue-400 hover:text-blue-700">+233 20 933 4967</Link> for further assistance.</p>
            </CardContent>
            <CardFooter>
              <p className="text-justify">If you have any donations just call us or email us</p>
            </CardFooter>
          </Card>
        </article>
      </section>
    </main>
  );
}
