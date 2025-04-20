import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, CreditCard, Shield, Star, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";

const DonatePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-4">
            Поддержи наш проект
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Получи уникальные привилегии и поддержи развитие нашей сети серверов CS2.
            Мы постоянно работаем над улучшением игрового опыта.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border border-purple-800/50 bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-center">
                <Shield className="h-10 w-10 text-purple-400" />
              </div>
              <CardTitle className="text-center text-xl">VIP</CardTitle>
              <CardDescription className="text-center text-lg">
                <span className="text-purple-400 font-bold">300₽</span> / месяц
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Доступ ко всем VIP командам</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Резервный слот на сервере</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Уникальный префикс в чате</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Доступ к VIP скинам оружия</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Выбрать</Button>
            </CardFooter>
          </Card>

          <Card className="border border-purple-500 bg-gradient-to-b from-gray-900 to-purple-950/30 backdrop-blur-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
              ПОПУЛЯРНОЕ
            </div>
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-center">
                <Star className="h-10 w-10 text-yellow-400" />
              </div>
              <CardTitle className="text-center text-xl">PREMIUM</CardTitle>
              <CardDescription className="text-center text-lg">
                <span className="text-yellow-400 font-bold">600₽</span> / месяц
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Все преимущества VIP</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Изменение модели игрока</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Дополнительные бонусы при входе</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Доступ к премиум оружию</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Возможность установки своего тега</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600">Выбрать</Button>
            </CardFooter>
          </Card>

          <Card className="border border-purple-800/50 bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="mb-2 flex justify-center">
                <Zap className="h-10 w-10 text-red-400" />
              </div>
              <CardTitle className="text-center text-xl">ADMIN</CardTitle>
              <CardDescription className="text-center text-lg">
                <span className="text-red-400 font-bold">1200₽</span> / месяц
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Все преимущества PREMIUM</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Админ команды для управления</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Кик/бан игроков</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Смена карты голосованием</span>
              </div>
              <div className="flex items-start">
                <Check className="h-4 w-4 mr-2 text-green-400 shrink-0 mt-0.5" />
                <span>Полный доступ ко всем скинам</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-red-600 hover:bg-red-700">Выбрать</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-gray-900/70 border border-purple-900/30 rounded-lg p-6 mb-12 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Выберите срок действия</h2>
          
          <Tabs defaultValue="month1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="month1">1 месяц</TabsTrigger>
              <TabsTrigger value="month3">3 месяца <span className="text-xs text-green-400 ml-1">-10%</span></TabsTrigger>
              <TabsTrigger value="forever">Навсегда <span className="text-xs text-green-400 ml-1">-30%</span></TabsTrigger>
            </TabsList>
            
            <TabsContent value="month1" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nickname">Ваш никнейм в игре</Label>
                    <Input id="nickname" placeholder="Введите никнейм" className="bg-gray-800 border-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите способ оплаты</Label>
                    <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Банковская карта
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <RadioGroupItem value="qiwi" id="qiwi" />
                        <Label htmlFor="qiwi">QIWI</Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <RadioGroupItem value="webmoney" id="webmoney" />
                        <Label htmlFor="webmoney">WebMoney</Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <RadioGroupItem value="crypto" id="crypto" />
                        <Label htmlFor="crypto">Криптовалюта</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                    Перейти к оплате
                  </Button>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">Информация о преимуществах</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Привилегии активируются моментально после оплаты</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Работают на всех серверах нашей сети</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>При покупке на более длительный срок вы получаете существенную скидку</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-purple-400 shrink-0 mt-0.5" />
                      <span>Техническая поддержка в приоритетном порядке</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="month3" className="mt-0">
              <div className="text-center py-8 text-gray-400">
                Выберите данный тариф и получите скидку 10% при оплате за 3 месяца
              </div>
            </TabsContent>
            
            <TabsContent value="forever" className="mt-0">
              <div className="text-center py-8 text-gray-400">
                Выберите данный тариф и получите скидку 30% при покупке привилегии навсегда
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-gray-900/70 border border-purple-900/30 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Как быстро активируется привилегия после оплаты?</AccordionTrigger>
              <AccordionContent>
                Привилегия активируется автоматически сразу после успешной оплаты. Вам нужно будет перезайти на сервер, чтобы изменения вступили в силу.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Что делать, если я сменил никнейм?</AccordionTrigger>
              <AccordionContent>
                Если вы сменили никнейм, вам необходимо обратиться в поддержку через Discord или VK. Администратор перенесет вашу привилегию на новый никнейм.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>На каких серверах работает привилегия?</AccordionTrigger>
              <AccordionContent>
                Ваша привилегия работает на всех серверах нашей сети. Вы можете использовать все доступные команды и возможности на любом сервере.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Можно ли вернуть деньги за покупку?</AccordionTrigger>
              <AccordionContent>
                Возврат средств возможен только в случае технических проблем со стороны нашего сервиса и в течение 24 часов после покупки. Для оформления возврата обратитесь к администрации.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonatePage;
