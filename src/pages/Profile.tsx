
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { Clock, Server, Trophy, CreditCard, User, Settings, Shield, LogOut } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Профиль пользователя */}
          <Card className="bg-gray-900 border-gray-800 col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="аватар" />
                  <AvatarFallback className="bg-purple-700">CS</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">DeadShot</h2>
                <Badge className="mt-2 bg-gradient-to-r from-purple-600 to-blue-500">VIP Игрок</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Последний вход</p>
                    <p>Сегодня, 15:30</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Любимый сервер</p>
                    <p>CS2 Classic #1</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Общий счет</p>
                    <p>5,432 киллов</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="text-gray-400 text-sm">Баланс</p>
                    <p>1,200 руб.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                  <CreditCard className="h-4 w-4" /> Пополнить баланс
                </Button>
                <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  Изменить аватар
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Основное содержимое */}
          <div className="col-span-1 md:col-span-2">
            <Tabs defaultValue="stats" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 bg-gray-900">
                <TabsTrigger value="stats" className="data-[state=active]:bg-purple-600">Статистика</TabsTrigger>
                <TabsTrigger value="inventory" className="data-[state=active]:bg-purple-600">Инвентарь</TabsTrigger>
                <TabsTrigger value="servers" className="data-[state=active]:bg-purple-600">Сервера</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">Настройки</TabsTrigger>
              </TabsList>
              
              <TabsContent value="stats">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>Статистика игрока</CardTitle>
                    <CardDescription>Ваша активность на серверах CS2</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Общая статистика</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Убийства:</span>
                            <span>5,432</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Смерти:</span>
                            <span>4,210</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">K/D Ratio:</span>
                            <span>1.29</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Хедшоты:</span>
                            <span>2,145 (39%)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Точность:</span>
                            <span>42%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Победы:</span>
                            <span>321</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Любимое оружие</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span>AK-47</span>
                              <span className="text-sm text-gray-400">42% убийств</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span>M4A4</span>
                              <span className="text-sm text-gray-400">28% убийств</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span>AWP</span>
                              <span className="text-sm text-gray-400">15% убийств</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gray-800 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">Достижения</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 flex items-center justify-center mb-2">
                            <Trophy className="h-6 w-6" />
                          </div>
                          <span className="text-sm text-center">Снайпер</span>
                        </div>
                        
                        <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center mb-2">
                            <Trophy className="h-6 w-6" />
                          </div>
                          <span className="text-sm text-center">Терминатор</span>
                        </div>
                        
                        <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center opacity-50">
                          <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                            <Trophy className="h-6 w-6" />
                          </div>
                          <span className="text-sm text-center">Ветеран</span>
                        </div>
                        
                        <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center opacity-50">
                          <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mb-2">
                            <Trophy className="h-6 w-6" />
                          </div>
                          <span className="text-sm text-center">Чемпион</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="inventory">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>Ваш инвентарь</CardTitle>
                    <CardDescription>Привилегии и предметы на серверах</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-4">Активные привилегии</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-900 p-3 rounded-lg border-l-4 border-purple-500">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">VIP Статус</h4>
                                <p className="text-sm text-gray-400">Все сервера</p>
                              </div>
                              <Badge className="bg-green-600">30 дней</Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-400">
                              Доступ к VIP командам, дополнительным скинам и слотам
                            </div>
                          </div>
                          
                          <div className="bg-gray-900 p-3 rounded-lg border-l-4 border-blue-500">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Резервный слот</h4>
                                <p className="text-sm text-gray-400">CS2 Classic #2</p>
                              </div>
                              <Badge className="bg-green-600">Бессрочно</Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-400">
                              Гарантированный слот на сервере даже при полной загрузке
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="mt-4 w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                          Купить привилегии
                        </Button>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-4">Скины и модели</h3>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center">
                            <div className="h-14 w-14 bg-gray-800 rounded-lg mb-2"></div>
                            <span className="text-sm">AWP Dragon</span>
                          </div>
                          
                          <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center">
                            <div className="h-14 w-14 bg-gray-800 rounded-lg mb-2"></div>
                            <span className="text-sm">AK Neon</span>
                          </div>
                          
                          <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center">
                            <div className="h-14 w-14 bg-gray-800 rounded-lg mb-2"></div>
                            <span className="text-sm">Custom T</span>
                          </div>
                          
                          <div className="bg-gray-900 p-3 rounded-lg flex flex-col items-center">
                            <div className="h-14 w-14 bg-gray-800 rounded-lg mb-2"></div>
                            <span className="text-sm">Knife Karambit</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="mt-4 w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                          Магазин скинов
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="servers">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>Избранные сервера</CardTitle>
                    <CardDescription>Сервера, на которых вы играете</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">CS2 Classic #1</h3>
                            <p className="text-sm text-gray-400">de_dust2, de_mirage, de_inferno</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-600">Онлайн: 24/32</Badge>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              Подключиться
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="text-gray-400">Ваши матчи:</div>
                            <div>64</div>
                            <div className="text-gray-400">KD:</div>
                            <div>1.4</div>
                            <div className="text-gray-400">Время:</div>
                            <div>48ч</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">CS2 AWP #3</h3>
                            <p className="text-sm text-gray-400">awp_india, awp_lego</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-600">Онлайн: 16/24</Badge>
                            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                              Подключиться
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="text-gray-400">Ваши матчи:</div>
                            <div>32</div>
                            <div className="text-gray-400">KD:</div>
                            <div>2.1</div>
                            <div className="text-gray-400">Время:</div>
                            <div>12ч</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">CS2 HNS #1</h3>
                            <p className="text-sm text-gray-400">hns_floppytown, hns_palace</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-amber-600">Офлайн</Badge>
                            <Button size="sm" className="bg-gray-700 hover:bg-gray-600" disabled>
                              Отключен
                            </Button>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-3 text-sm">
                            <div className="text-gray-400">Ваши матчи:</div>
                            <div>18</div>
                            <div className="text-gray-400">KD:</div>
                            <div>0.8</div>
                            <div className="text-gray-400">Время:</div>
                            <div>6ч</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                      Посмотреть все сервера
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle>Настройки профиля</CardTitle>
                    <CardDescription>Управление вашей учетной записью</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-lg font-medium">
                          <User className="h-5 w-5 text-purple-500" />
                          <h3>Личная информация</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Ник</label>
                            <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2" value="DeadShot" />
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Email</label>
                            <input type="email" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2" value="player@example.com" />
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Steam ID</label>
                            <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2" value="STEAM_0:1:12345678" disabled />
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Discord</label>
                            <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2" value="deadshot#1234" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-lg font-medium">
                          <Settings className="h-5 w-5 text-purple-500" />
                          <h3>Безопасность</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Текущий пароль</label>
                            <input type="password" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2" value="********" />
                          </div>
                          
                          <div>
                            <label className="text-sm text-gray-400 block mb-1">Новый пароль</label>
                            <input type="password" className="w-full bg-gray-800 border border-gray-700 rounded-md p-2" placeholder="Оставьте пустым, если не меняете" />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                          <div>
                            <h4 className="font-medium">Двухфакторная аутентификация</h4>
                            <p className="text-sm text-gray-400">Дополнительный уровень защиты для вашей учетной записи</p>
                          </div>
                          <Button size="sm" variant="outline" className="border-gray-700">Включить</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-lg font-medium">
                          <Shield className="h-5 w-5 text-purple-500" />
                          <h3>Приватность</h3>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Показывать мой профиль всем пользователям</div>
                            <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Показывать статистику в общем рейтинге</div>
                            <div className="w-12 h-6 bg-purple-600 rounded-full relative cursor-pointer">
                              <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm">Получать уведомления на email</div>
                            <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between pt-4 border-t border-gray-800">
                        <Button variant="outline" className="border-red-800 text-red-500 hover:bg-red-950 hover:text-red-400 flex items-center gap-2">
                          <LogOut className="h-4 w-4" /> Выйти
                        </Button>
                        
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                          Сохранить изменения
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
