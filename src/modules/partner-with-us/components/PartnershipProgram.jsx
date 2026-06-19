import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import SectionViewer from '@/components/common/SectionViewer';
import SectionLabel from '@/components/common/SectionLabel';
import { Check, Users, Briefcase, Building2, Star, ArrowRight } from 'lucide-react';

// Three partnership tiers — same intent as the reference (Referral / Channel /
// Strategic) but reworded for Inscribe IQ and styled to a clean, colourful brand look.
const PLANS = [
	{
		icon: Users,
		name: 'Referral Partner',
		description: 'For individuals, alumni & solo consultants',
		price: 'Free',
		period: 'to join',
		cta: 'Become a Referral Partner',
		iconGradient: 'from-violet-500 to-purple-600',
		checkColor: 'text-violet-500',
		btnClass: 'border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100',
		features: [
			'Commission on every successful referral',
			'Ready-to-use marketing & social kit',
			'Dedicated WhatsApp support line',
			'Guided onboarding & product training',
			'Reliable payouts within 30 days',
		],
	},
	{
		icon: Briefcase,
		name: 'Channel Partner',
		badge: 'Most Popular',
		description: 'For education consultants & coaching centres',
		price: 'Up to 25%',
		period: 'commission',
		cta: 'Become a Channel Partner',
		highlight: true,
		features: [
			'Everything in Referral Partner',
			'Higher, tiered commission slabs',
			'Co-branded campaigns & collateral',
			'Private partner portal & live dashboards',
			'A dedicated account manager',
			'Shared qualified leads & priority support',
		],
	},
	{
		icon: Building2,
		name: 'Strategic Partner',
		description: 'For institutions, corporates & global agencies',
		price: 'Custom',
		period: 'terms',
		cta: 'Become a Strategic Partner',
		iconGradient: 'from-blue-600 to-indigo-700',
		checkColor: 'text-blue-600',
		btnClass: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100',
		features: [
			'Everything in Channel Partner',
			'White-label & co-branded programs',
			'Co-hosted events & webinars',
			'Exclusive territory rights',
			'Custom scholarships for your audience',
			'Direct access to our leadership team',
		],
	},
];

function ProgramCard({ plan, index }) {
	const Icon = plan.icon;
	const popular = plan.highlight;

	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-60px' }}
			transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
			className={cn(
				'relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 md:p-8',
				popular
					? 'bg-gradient-to-br from-[#7A5EE9] via-[#6B52F9] to-[#3A1C9E] text-white shadow-2xl shadow-primary/30 ring-1 ring-white/20 lg:-mt-4 lg:mb-4'
					: 'border border-border bg-white shadow-lg hover:-translate-y-1.5 hover:shadow-2xl',
			)}
		>
			{/* Popular badge */}
			{popular && (
				<span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground shadow">
					<Star className="h-3 w-3 fill-current" />
					{plan.badge}
				</span>
			)}

			{/* Icon */}
			<span
				className={cn(
					'flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg',
					popular
						? 'bg-white/15 text-white ring-1 ring-white/25'
						: cn('bg-gradient-to-br text-white', plan.iconGradient),
				)}
			>
				<Icon className="h-6 w-6" />
			</span>

			{/* Name + description */}
			<h3 className={cn('mt-5 text-xl font-bold', popular ? 'text-white' : 'text-primary')}>
				{plan.name}
			</h3>
			<p className={cn('mt-1.5 text-sm', popular ? 'text-white/75' : 'text-muted-foreground')}>
				{plan.description}
			</p>

			{/* Price */}
			<div className="mt-6 flex items-end gap-2">
				<span
					className={cn(
						'text-4xl font-extrabold tracking-tight',
						popular ? 'text-white' : 'text-primary',
					)}
				>
					{plan.price}
				</span>
				<span className={cn('pb-1.5 text-sm', popular ? 'text-white/75' : 'text-muted-foreground')}>
					{plan.period}
				</span>
			</div>

			{/* CTA */}
			<Button
				asChild
				size="lg"
				variant={popular ? 'secondary' : 'outline'}
				className={cn('mt-6 w-full font-semibold', !popular && plan.btnClass)}
			>
				<a href="#apply">
					{plan.cta}
					<ArrowRight className="h-4 w-4" />
				</a>
			</Button>

			{/* Divider */}
			<div className={cn('my-6 h-px w-full', popular ? 'bg-white/20' : 'bg-border')} />

			{/* Features */}
			<ul className="flex flex-1 flex-col gap-3.5">
				{plan.features.map((item) => (
					<li key={item} className="flex items-start gap-3 text-sm">
						<span
							className={cn(
								'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
								popular ? 'bg-secondary/20' : 'bg-muted',
							)}
						>
							<Check
								className={cn('h-3 w-3', popular ? 'text-secondary' : plan.checkColor)}
								strokeWidth={3}
							/>
						</span>
						<span className={cn(popular ? 'text-white/90' : 'text-foreground/80')}>{item}</span>
					</li>
				))}
			</ul>
		</motion.div>
	);
}

export default function PartnershipProgram() {
	return (
		<section id="programs" className="scroll-mt-24">
			<SectionViewer className="inter py-16 md:py-24">
				{/* Heading */}
				<motion.div
					className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-3 text-center"
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-60px' }}
					transition={{ duration: 0.55, ease: 'easeOut' }}
				>
					<SectionLabel label="Partnership Programs" />
					<h2 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl xl:text-5xl">
						Choose the partnership tier that fits you
					</h2>
					<p className="text-base leading-relaxed text-muted-foreground md:text-lg">
						Three flexible ways to grow with Inscribe IQ — from earning on your first
						referral to building a full white-label partnership.
					</p>
				</motion.div>

				{/* Tier cards */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch lg:gap-8">
					{PLANS.map((plan, i) => (
						<ProgramCard key={plan.name} plan={plan} index={i} />
					))}
				</div>
			</SectionViewer>
		</section>
	);
}
