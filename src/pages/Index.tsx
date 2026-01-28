import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface LoanOffer {
  id: number;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  amount: string;
  term: string;
  rate: string;
  approval: string;
  features: string[];
  badge?: string;
}

interface BlogArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

const loanOffers: LoanOffer[] = [
  {
    id: 1,
    name: 'МигКредит',
    logo: '💰',
    rating: 4.8,
    reviewCount: 2543,
    amount: 'до 100 000 ₽',
    term: '1-30 дней',
    rate: 'от 0%',
    approval: '5 минут',
    features: ['Первый займ 0%', 'Без проверки КИ', 'Одобрение 98%'],
    badge: 'Топ выбор'
  },
  {
    id: 2,
    name: 'Быстроденьги',
    logo: '⚡',
    rating: 4.6,
    reviewCount: 1823,
    amount: 'до 70 000 ₽',
    term: '1-30 дней',
    rate: 'от 0%',
    approval: '3 минуты',
    features: ['Новым клиентам 0%', 'На карту мгновенно', 'Без отказа'],
    badge: 'Быстрое решение'
  },
  {
    id: 3,
    name: 'Займер',
    logo: '🚀',
    rating: 4.7,
    reviewCount: 3102,
    amount: 'до 80 000 ₽',
    term: '5-30 дней',
    rate: 'от 0%',
    approval: '10 минут',
    features: ['0% для новых', 'Без справок', 'Онлайн 24/7'],
  },
  {
    id: 4,
    name: 'Веб-Займ',
    logo: '💎',
    rating: 4.5,
    reviewCount: 1456,
    amount: 'до 60 000 ₽',
    term: '7-30 дней',
    rate: 'от 1%',
    approval: '15 минут',
    features: ['Лояльные условия', 'Пенсионерам одобряем', 'Продление займа'],
  },
  {
    id: 5,
    name: 'ОнлайнКредит',
    logo: '🔥',
    rating: 4.9,
    reviewCount: 4201,
    amount: 'до 150 000 ₽',
    term: '1-365 дней',
    rate: 'от 0%',
    approval: '1 минута',
    features: ['Первый займ 0%', 'До года', 'Максимальная сумма'],
    badge: 'Лучшая ставка'
  },
  {
    id: 6,
    name: 'ДеньгиСразу',
    logo: '💵',
    rating: 4.4,
    reviewCount: 987,
    amount: 'до 50 000 ₽',
    term: '7-21 день',
    rate: 'от 0.5%',
    approval: '5 минут',
    features: ['Без паспорта', 'Только СНИЛС', 'Круглосуточно'],
  }
];

const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: 'Микрозаймы под 0%: как получить первый займ без процентов',
    excerpt: 'Разбираем акции МФО для новых клиентов и условия получения беспроцентного займа. Пошаговая инструкция и лайфхаки.',
    category: 'Советы',
    date: '25 января 2026',
    readTime: '5 мин',
    image: '📚'
  },
  {
    id: 2,
    title: 'Топ-5 МФО с самым быстрым одобрением в 2026 году',
    excerpt: 'Сравнение скорости выдачи займов: от заявки до получения денег. Реальные сроки и отзывы клиентов.',
    category: 'Рейтинги',
    date: '23 января 2026',
    readTime: '7 мин',
    image: '⚡'
  },
  {
    id: 3,
    title: 'Как улучшить кредитную историю с помощью микрозаймов',
    excerpt: 'Эффективная стратегия повышения кредитного рейтинга через правильное использование краткосрочных займов.',
    category: 'Гайды',
    date: '20 января 2026',
    readTime: '6 мин',
    image: '📈'
  },
  {
    id: 4,
    title: 'Займы без отказа: правда или маркетинг?',
    excerpt: 'Разбираем, что скрывается за обещаниями «100% одобрение» и как повысить шансы на получение займа.',
    category: 'Аналитика',
    date: '18 января 2026',
    readTime: '8 мин',
    image: '🔍'
  },
  {
    id: 5,
    title: 'Сколько микрозаймов можно взять одновременно: законы и риски',
    excerpt: 'Юридические ограничения, финансовые риски и рекомендации экспертов по управлению несколькими займами.',
    category: 'Законы',
    date: '15 января 2026',
    readTime: '10 мин',
    image: '⚖️'
  },
  {
    id: 6,
    title: 'Рефинансирование микрозаймов: когда это выгодно',
    excerpt: 'Как перекредитоваться на более выгодных условиях и сэкономить на процентах. Пошаговый алгоритм.',
    category: 'Советы',
    date: '12 января 2026',
    readTime: '6 мин',
    image: '💡'
  }
];

const faqData = [
  {
    question: 'Как получить микрозайм онлайн?',
    answer: 'Выберите подходящее предложение из каталога, заполните заявку на сайте МФО (займёт 3-5 минут), дождитесь одобрения и получите деньги на карту в течение нескольких минут.'
  },
  {
    question: 'Какие документы нужны для получения займа?',
    answer: 'Обычно требуется только паспорт РФ. Некоторые МФО могут запросить СНИЛС или второй документ. Справки о доходах не требуются.'
  },
  {
    question: 'Можно ли получить займ с плохой кредитной историей?',
    answer: 'Да, многие МФО одобряют займы даже с негативной кредитной историей. В каталоге есть предложения с одобрением до 98%.'
  },
  {
    question: 'Что такое займ под 0%?',
    answer: 'Это акция для новых клиентов: первый займ предоставляется без процентов. Вы возвращаете только ту сумму, которую взяли.'
  },
  {
    question: 'Как быстро деньги поступят на карту?',
    answer: 'Зависит от МФО: от 1 минуты до нескольких часов. Большинство организаций переводят деньги в течение 5-15 минут после одобрения.'
  }
];

export default function Index() {
  const [loanAmount, setLoanAmount] = useState([30000]);
  const [loanTerm, setLoanTerm] = useState([14]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const calculatePayment = () => {
    const rate = 0.01;
    const total = loanAmount[0] * (1 + rate * loanTerm[0]);
    const dailyPayment = total / loanTerm[0];
    return { total: Math.round(total), daily: Math.round(dailyPayment) };
  };

  const payment = calculatePayment();

  const filteredOffers = selectedFilter === 'all' 
    ? loanOffers 
    : loanOffers.filter(offer => offer.badge);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">💸</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ЗаймЭксперт
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="text-sm hover:text-primary transition-colors">Каталог</a>
              <a href="#calculator" className="text-sm hover:text-primary transition-colors">Калькулятор</a>
              <a href="#comparison" className="text-sm hover:text-primary transition-colors">Сравнение</a>
              <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Поддержка
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Найдите лучший{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                микрозайм
              </span>
              {' '}за минуту
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Сравните условия топовых МФО России. Первый займ под 0% для новых клиентов
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                <Icon name="TrendingUp" className="w-5 h-5 mr-2" />
                Подобрать займ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary/50 hover:bg-primary/10">
                <Icon name="Calculator" className="w-5 h-5 mr-2" />
                Рассчитать платёж
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Одобрений</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-secondary">5 мин</div>
                <div className="text-sm text-muted-foreground">До получения</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-accent">0%</div>
                <div className="text-sm text-muted-foreground">Первый займ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Топовые предложения</h3>
            <p className="text-muted-foreground text-lg">Выбрано лучшее из 50+ МФО по рейтингу и отзывам</p>
          </div>

          <div className="flex gap-2 mb-8 justify-center flex-wrap">
            <Button 
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('all')}
              className={selectedFilter === 'all' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
            >
              Все предложения
            </Button>
            <Button 
              variant={selectedFilter === 'top' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('top')}
              className={selectedFilter === 'top' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
            >
              <Icon name="Star" className="w-4 h-4 mr-2" />
              Топ выбор
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffers.map((offer, index) => (
              <Card 
                key={offer.id} 
                className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {offer.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-accent to-primary text-white border-0">
                      <Icon name="Star" className="w-3 h-3 mr-1" />
                      {offer.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{offer.logo}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{offer.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              className={`w-4 h-4 ${i < Math.floor(offer.rating) ? 'text-accent fill-accent' : 'text-muted'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold">{offer.rating}</span>
                        <span className="text-xs text-muted-foreground">({offer.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-muted-foreground">Сумма</div>
                      <div className="font-semibold text-primary">{offer.amount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Срок</div>
                      <div className="font-semibold">{offer.term}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Ставка</div>
                      <div className="font-semibold text-accent">{offer.rate}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Решение</div>
                      <div className="font-semibold text-secondary">{offer.approval}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" className="w-4 h-4 text-secondary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Получить займ
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Калькулятор микрозайма</CardTitle>
              <CardDescription className="text-center text-base">
                Рассчитайте ежедневный платёж и полную стоимость займа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Сумма займа</label>
                  <div className="text-2xl font-bold text-primary">{loanAmount[0].toLocaleString()} ₽</div>
                </div>
                <Slider 
                  value={loanAmount} 
                  onValueChange={setLoanAmount}
                  min={5000}
                  max={100000}
                  step={5000}
                  className="[&_[role=slider]]:bg-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>5 000 ₽</span>
                  <span>100 000 ₽</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Срок займа</label>
                  <div className="text-2xl font-bold text-secondary">{loanTerm[0]} дней</div>
                </div>
                <Slider 
                  value={loanTerm} 
                  onValueChange={setLoanTerm}
                  min={7}
                  max={30}
                  step={1}
                  className="[&_[role=slider]]:bg-secondary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>7 дней</span>
                  <span>30 дней</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <Card className="bg-primary/10 border-primary/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">К возврату</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">{payment.total.toLocaleString()} ₽</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      +{(payment.total - loanAmount[0]).toLocaleString()} ₽ переплата
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/10 border-secondary/30">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-muted-foreground">Ежедневный платёж</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-secondary">{payment.daily.toLocaleString()} ₽</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      При равномерном погашении
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                <Icon name="Search" className="w-5 h-5 mr-2" />
                Найти предложения с этими условиями
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="comparison" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Сравнение МФО</h3>
            <p className="text-muted-foreground text-lg">Детальное сравнение условий топ-3 организаций</p>
          </div>

          <Tabs defaultValue="conditions" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="conditions">Условия</TabsTrigger>
              <TabsTrigger value="features">Особенности</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>

            <TabsContent value="conditions">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-4 font-semibold">Параметр</th>
                          <th className="text-center p-4 font-semibold">МигКредит</th>
                          <th className="text-center p-4 font-semibold">ОнлайнКредит</th>
                          <th className="text-center p-4 font-semibold">Займер</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-4 text-muted-foreground">Максимальная сумма</td>
                          <td className="p-4 text-center font-semibold">100 000 ₽</td>
                          <td className="p-4 text-center font-semibold text-primary">150 000 ₽</td>
                          <td className="p-4 text-center font-semibold">80 000 ₽</td>
                        </tr>
                        <tr className="bg-muted/20">
                          <td className="p-4 text-muted-foreground">Срок займа</td>
                          <td className="p-4 text-center font-semibold">1-30 дней</td>
                          <td className="p-4 text-center font-semibold text-primary">1-365 дней</td>
                          <td className="p-4 text-center font-semibold">5-30 дней</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground">Ставка</td>
                          <td className="p-4 text-center font-semibold text-accent">от 0%</td>
                          <td className="p-4 text-center font-semibold text-accent">от 0%</td>
                          <td className="p-4 text-center font-semibold text-accent">от 0%</td>
                        </tr>
                        <tr className="bg-muted/20">
                          <td className="p-4 text-muted-foreground">Время решения</td>
                          <td className="p-4 text-center font-semibold">5 минут</td>
                          <td className="p-4 text-center font-semibold text-secondary">1 минута</td>
                          <td className="p-4 text-center font-semibold">10 минут</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground">Рейтинг</td>
                          <td className="p-4 text-center font-semibold">4.8 ⭐</td>
                          <td className="p-4 text-center font-semibold text-primary">4.9 ⭐</td>
                          <td className="p-4 text-center font-semibold">4.7 ⭐</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <div className="grid md:grid-cols-3 gap-6">
                {loanOffers.slice(0, 3).map(offer => (
                  <Card key={offer.id}>
                    <CardHeader>
                      <div className="text-4xl mb-2">{offer.logo}</div>
                      <CardTitle>{offer.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="grid md:grid-cols-3 gap-6">
                {loanOffers.slice(0, 3).map(offer => (
                  <Card key={offer.id}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{offer.logo}</div>
                        <div>
                          <CardTitle className="text-lg">{offer.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Icon 
                                  key={i} 
                                  name="Star" 
                                  className={`w-3 h-3 ${i < Math.floor(offer.rating) ? 'text-accent fill-accent' : 'text-muted'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-semibold">{offer.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm text-muted-foreground">
                        Всего отзывов: <span className="font-semibold text-foreground">{offer.reviewCount}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground w-16">5 звёзд</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-accent" style={{ width: '75%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">75%</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground w-16">4 звезды</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-secondary" style={{ width: '15%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">15%</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground w-16">3 звезды</span>
                          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: '5%' }}></div>
                          </div>
                          <span className="text-xs text-muted-foreground">5%</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full" size="sm">
                        Читать отзывы
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="blog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Блог и новости</h3>
            <p className="text-muted-foreground text-lg">Полезные статьи о микрозаймах и финансовой грамотности</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article, index) => (
              <Card 
                key={article.id}
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer overflow-hidden border-border/50"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="text-4xl">{article.image}</div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Читать статью
                    <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/50">
              <Icon name="BookOpen" className="w-5 h-5 mr-2" />
              Смотреть все статьи
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-4xl font-bold">Часто задаваемые вопросы</h3>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о микрозаймах</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
            <CardContent className="relative z-10 p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">Нужна помощь в выборе?</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Наши специалисты бесплатно подберут оптимальное предложение под ваши условия
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                  Написать в поддержку
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50">
                  <Icon name="Phone" className="w-5 h-5 mr-2" />
                  8 800 555-35-35
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/40 py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl">💸</div>
                <span className="font-bold text-lg">ЗаймЭксперт</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Сравнение микрозаймов от топовых МФО России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a></div>
                <div><a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">Калькулятор</a></div>
                <div><a href="#comparison" className="text-muted-foreground hover:text-primary transition-colors">Сравнение</a></div>
                <div><a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Блог</a></div>
                <div><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground">О платформе</div>
                <div className="text-muted-foreground">Наши партнёры</div>
                <div className="text-muted-foreground">Правила использования</div>
                <div className="text-muted-foreground">Конфиденциальность</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <div className="text-muted-foreground">8 800 555-35-35</div>
                <div className="text-muted-foreground">info@zaimexpert.ru</div>
                <div className="text-muted-foreground">Пн-Вс: 9:00-21:00</div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ЗаймЭксперт. Все права защищены. Сервис сравнения микрозаймов.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}