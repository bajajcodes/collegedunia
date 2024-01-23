import { Button } from './ui/button';
import { Icons } from './icons';
import { siteConfig } from '~/config/site';

const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.contact.primaryNumber}`;

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed right-1 bottom-8 md:right-8 z-[49] p-6 md:p-8 rounded-md"
    >
      <Icons.Whatsapp className="w-10 h-10 md:mr-2" />

      <span className="hidden md:inline-block text-sm">
        CHAT WITH US <br />
        Typically replies within minutes!!
      </span>
    </Button>
  );
};
