"use client";
import Logo from "@/components/Logo";
import { Form, FormGroup } from "@/components/Form/style";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "@/components/Form/typo";
import Button from "@/components/Button";
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
    
    return (<Form data-component="form" className="flex items-center justify-center flex-col form" onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <FormGroup className="flex flex-col">
            <Button className="primary">
                Entrar
            </Button>
        </FormGroup>
    </Form>)
}