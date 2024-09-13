"use client";
import Logo from "../Logo";
import { Form, FormGroup } from "./style";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./typo";
import Button from "../Button";
import { useRouter } from "next/navigation";

export default function Forms(props: any) {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => router.push(`/dashboard`, { scroll: true });;
    
    return (<Form className="flex items-center justify-center flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <FormGroup className="flex flex-col">
            <Button className="primary">
                Entrar
            </Button>
        </FormGroup>
    </Form>)
}