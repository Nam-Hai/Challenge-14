import { trigger, state, style, transition, animate, query, group, animateChild} from '@angular/animations';

export const Animations = [
    trigger('letterAnimation', [
        state('true', style({
            top: '0'
        }),  ),
        state('false',   style({
            top: '4.9rem'
        })),
        transition('true => false', animate('400ms {{delay}}ms ease-in-out')),
        transition('false => true', animate('400ms {{delay}}ms ease-in-out'))
    ]),
    trigger('separator', [
        state('true', 
            style({
                width: '32.5rem'
            }),
        ),
        state('false', 
            style({
                width: "0"
            })
        ),
        transition('true => false', animate('250m {{delay}}ms ease-in')),
        transition('false => true', animate('250ms {{delay}}ms cubic-bezier(.68,.01,.4,.97)'))
    ]),

    trigger('toggleDisplayOverlay', [
        state('true', 
            style({
                opacity: "1",
                visibility: "visible"
            }),
        ),
        state('false', 
            style({
                opacity:"0",
                visibility: "hidden"
            })
        ),
        transition('* => *', animate('600ms 100ms cubic-bezier(.77,0,.18,1)')),
    ]),
    trigger('toggleModal', [
        state('true', 
            style({
                opacity: "1",
                visibility: "visible"
            }),
        ),
        state('false', 
            style({
                opacity:"0",
                visibility: "hidden"
            })
        ),
        transition('* => *', animate('300ms 100ms cubic-bezier(.77,0,.18,1)')),
    ]),
    trigger('toggleDisplay', [
        state('true', 
            style({
                transform: "translateX(0)",
            }),
        ),
        state('false', 
            style({
                transform: "translateX(101%)",
            })
        ),
        transition('* => *', animate('600ms 100ms cubic-bezier(.77,0,.18,1)')),
    ]),
    trigger('toggleDropdown', [
        state('true', 
            style({
                height: "15rem",
                padding: "5rem 0"
            }),
        ),
        state('false', 
            style({
                height: "0rem",
                padding: "0 0"
            })
        ),
        transition('false => true', [
            group([
                query('@textDropdownToggle', [animateChild() ]),
                query(':self', [animate('300ms 50ms cubic-bezier(.77,0,.18,1)') ]),
            ])
        ]),
        transition('true => false', [
            group([
                query(':self', [animate('300ms 250ms cubic-bezier(.77,0,.18,1)') ]),
                query('@textDropdownToggle', [animateChild() ]),
            ])
        ]),
    ]),
    trigger('toggleContactDropdown', [
        state('true', 
            style({
                height: "3rem",
                padding: "4rem 0"
            }),
        ),
        state('false', 
            style({
                height: "0rem",
                padding: "0 0"
            })
        ),
        transition('false => true', [
            group([
                query('@textDropdownToggle', [animateChild() ]),
                query(':self', [animate('300ms 50ms cubic-bezier(.77,0,.18,1)') ]),
            ])
        ]),
        transition('true => false', [
            group([
                query(':self', [animate('300ms 250ms cubic-bezier(.77,0,.18,1)') ]),
                query('@textDropdownToggle', [animateChild() ]),
            ])
        ]),
    ]),
    trigger('textDropdownToggle', [
        state('true', 
            style({
                opacity: "1",
                top: "0",
                visibility: "visible"
            }),
        ),
        state('false', 
            style({
                opacity: "0",
                top: "-10px",
                visibility: "hidden"
            })
        ),
        transition('false => true', animate('200ms 350ms ease-in-out')),
        transition('true => false', animate('200ms 50ms ease-in-out')),
    ]),
    trigger('toggleMenuMobile', [
        state('true', 
            style({
                width: "calc(60vw - 6rem)",
                minWidth: "8rem",
                padding: "3rem 3rem",
                visibility: "visible"
            }),
        ),
        state('false', 
            style({
                width: "0",
                minWidth: "0",
                padding: "0rem 0rem",
                visibility: "hidden"
            })
        ),
        transition('false => true', [
            group([
                query('@textDropdownToggle', [animateChild() ]),
                query(':self', [animate('300ms 50ms cubic-bezier(.77,0,.18,1)') ]),
            ])
        ]),
        transition('true => false', [
            group([
                query(':self', [animate('300ms 250ms cubic-bezier(.77,0,.18,1)') ]),
                query('@textDropdownToggle', [animateChild() ]),
            ])
        ]),
    ]),
]