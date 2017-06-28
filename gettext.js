const Gettext = imports.gettext;

let minutesAgo = '10';

let text = Gettext.ngettext("%d minute ago", "%d minutes ago", minutesAgo);
//let text = Gettext.ngettext("%d minute ago", "%d minutes ago", minutesAgo).format(minutesAgo);

//print(text.format(minutesAgo));
print(Gettext.ngettext('%d minute ago'.format(minutesAgo)));
//log('No permission to trigger offline updates: %s'.format(minutesAgo));
