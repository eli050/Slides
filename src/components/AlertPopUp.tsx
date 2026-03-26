import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CloseButton } from "./styled_components/CloseButton";

type AlertPopUpProps = {
   open: boolean;
   onClose: () => void;
   title: string;
   content: string;
   children?: React.ReactNode;  
}



export function AlertPopUp({open, onClose, title, content, children}: AlertPopUpProps): JSXElement{

    return(            
        <Dialog open={open}>
            <DialogTitle>
                {title}
                <CloseButton
                    onClick={onClose}
                    >
                    <CloseIcon />
                </CloseButton>
            </DialogTitle>

            <DialogContent>
                {content}
            </DialogContent>
            {children}
        </Dialog>
        )
}