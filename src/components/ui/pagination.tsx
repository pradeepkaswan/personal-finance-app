import { Button } from "./button";
import { Icons } from "./icons";

const Pagination = ({ ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    className="mx-auto flex w-full justify-center"
    {...props}
  />
);

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

const PaginationLink = ({ isActive, ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className="flex items-center justify-center rounded-lg border border-beige-500 px-4 py-2 text-preset-4 hover:border-transparent hover:text-grey-900"
    {...props}
  />
);

const PaginationPrevious = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className="gap-1 pl-2.5"
    {...props}
  >
    <Button intent="secondary" weight="bold">
      <Icons.left />
      <span>Prev</span>
    </Button>
  </PaginationLink>
);

const PaginationNext = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className="gap-1 pr-2.5"
    {...props}
  >
    <Button intent="secondary" weight="bold">
      <span>Next</span>
      <Icons.right />
    </Button>
  </PaginationLink>
);

export { Pagination, PaginationLink, PaginationPrevious, PaginationNext };
